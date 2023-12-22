import * as fs from 'fs'
import * as path from 'path'
import { errorMessage, successMessage } from '../../utils/color'

export function mkdirp(dir: string, sep: string) {
  const parts = dir.split(sep ? sep : path.sep)

  for (let i = 1; i <= parts.length; i++) {
    const currentPath = path.join(...parts.slice(0, i))
    if (!fs.existsSync(currentPath)) {
      fs.mkdirSync(currentPath)
      console.log(`dir: ${successMessage(currentPath)}/ created`)
    } else {
      console.log(`dir: ${errorMessage(currentPath)}/ existed`)
    }
  }
}
