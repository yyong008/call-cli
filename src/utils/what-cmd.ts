import { execSync } from 'child_process'

export function getTerminalType(): string {
  if (process.platform === 'win32') {
    // Windows
    const output = execSync('echo %ComSpec%').toString().trim()
    console.log(output)
    if (output === '%ComSpec%') {
      return 'powershell'
    } else {
      return 'cmd'
    }
  } else {
    // Unix-like systems (Linux and macOS)
    if (process.env.SHELL && process.env.SHELL.toLowerCase().includes('zsh')) {
      return 'zsh'
    } else {
      return 'bash' // Default to bash if not explicitly detected
    }
  }
}

// 示例调用
const terminalType = getTerminalType()
console.log(`Terminal Type: ${terminalType}`)
