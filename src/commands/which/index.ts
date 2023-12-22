import * as os from 'os'
import * as process from 'process'
import { exec } from 'child_process'
import iconv from 'iconv-lite'

export function which(commandName: string) {
  const isWindows = os.platform() === 'win32'
  let _command = 'which'

  if (isWindows) {
    _command = 'where'

    if (isWindows && process.env.PSModulePath) {
      _command = 'powershell Get-Command'
    }
  }

  if (isWindows) {
    // 在Windows上使用自定义命令
    const customCommand = `${_command} ${commandName}`
    exec(customCommand, { encoding: 'binary' }, (error, stdout) => {
      if (error) {
        console.error(`Error: ${iconv.decode(error.message, 'cp936')}`)
        return
      }

      if (stdout) {
        console.log(stdout)
      } else {
        console.log(`Command not found: ${commandName}`)
      }
    })
  } else {
    // 在Linux和macOS上使用系统命令
    const systemCommand = `${_command} ${commandName}`
    exec(systemCommand, { encoding: 'utf8' }, (error, stdout) => {
      if (error) {
        console.log('error', error)
        console.error(`Error: ${error.message}`)
        return
      }

      if (stdout) {
        console.log(' s', stdout)
      } else {
        console.log(`Command not found: ${commandName}`)
      }
    })
  }
}
