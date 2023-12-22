import { exec } from 'child_process'

export function changeDirectory(newPath: string) {
  const command =
    process.platform === 'win32' ? `cd ${newPath}` : `cd ${newPath} && pwd`

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`)
      return
    }

    if (stderr) {
      console.error(`Error: ${stderr}`)
      return
    }

    console.log(`Changed directory to: ${newPath}`)
  })
}
