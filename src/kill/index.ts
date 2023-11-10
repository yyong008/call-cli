import { exec } from 'child_process'
import iconv from 'iconv-lite'

export function kill(processId: string) {
  let killCommand = ''

  if (process.platform === 'win32') {
    // Windows 上使用 taskkill 命令
    killCommand = `taskkill /F /PID ${processId}`
  } else {
    // Linux 上使用 kill 命令
    killCommand = `kill -9 ${processId}`
  }

  // 执行终止命令
  exec(killCommand, { encoding: 'binary' }, (error, stdout, stderr) => {
    if (error) {
      console.error(
        `error: ${iconv.decode(Buffer.from(error.message, 'binary'), 'cp936')}`
      )
      return
    }

    if (stderr) {
      console.error(
        `stderr: ${iconv.decode(Buffer.from(stderr, 'binary'), 'cp936')}`
      )
      return
    }

    const utf8Stdout = iconv.decode(Buffer.from(stdout, 'binary'), 'cp936')
    console.log(`stdout: ${utf8Stdout}`)
  })
}
