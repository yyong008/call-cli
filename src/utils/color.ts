import chalk from 'chalk'

// 定义颜色工具函数
export function successMessage(message: string): string {
  return chalk.green.bold(message)
}

export function errorMessage(message: string): string {
  return chalk.red.bold(message)
}

export function warningMessage(message: string): string {
  return chalk.yellow.bold(message)
}
