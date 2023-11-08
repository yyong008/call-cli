import * as fs from 'fs'
import * as path from 'path'

export function mkdirp(dir: string, sep: string) {
  const parts = dir.split(sep ? sep : path.sep)

  for (let i = 1; i <= parts.length; i++) {
    const currentPath = path.join(...parts.slice(0, i))
    if (!fs.existsSync(currentPath)) {
      fs.mkdirSync(currentPath)
    }
  }
}
