import * as fs from 'fs'
import path from 'path'

export function cat(f: string) {
  const file = path.join(process.cwd(), f)
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err.message}`)
      process.exit(1)
    }
    // 打印文件内容
    console.log(data)
  })
}
