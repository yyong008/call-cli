import { exec } from 'child_process'
import iconv from 'iconv-lite'

export function ipconfig() {
  let command = 'ipconfig'

  if (process.platform === 'win32') {
    command = 'ipconfig'
  } else {
    command = 'ifconfig'
  }

  exec(command, { encoding: 'binary' }, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${iconv.decode(error?.message, 'cp936')}`)
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
