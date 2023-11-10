import { exec } from 'child_process'
import iconv from 'iconv-lite'
export function ps() {
  let command = ''

  if (process.platform === 'win32') {
    command = 'tasklist'
  } else {
    command = 'ps aux'
  }

  exec(command, { encoding: 'binary' }, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${iconv.decode(error.message, 'cp936')}`)
      return
    }

    if (stderr) {
      console.error(`stderr: ${stderr}`)
      return
    }
    const decodedStdout = iconv.decode(Buffer.from(stdout, 'binary'), 'cp936')
    console.log(`stdout: ${decodedStdout}`)
  })
}
