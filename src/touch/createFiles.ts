import * as path from 'path'
import fs from 'fs/promises'

import { successMessage, errorMessage } from '../utils/color'

export async function createFiles(files: string[]) {
  const currentDirectory = process.cwd()
  const filesArr = files.map((f: string, i: number) => [i, f]) satisfies [
    number,
    string,
  ][]

  for (const [index, file] of filesArr) {
    const filePath = path.join(currentDirectory, file) // 构建文件路径
    try {
      await fs.writeFile(filePath, '')
      console.log(
        `File "${successMessage(filePath)}" created ${successMessage(
          'successfully'
        )}. [${files.length}/${index + 1}]`
      )
    } catch (error) {
      console.error(
        `[${files.length}/${index + 1}] Error creating "${errorMessage(
          filePath
        )}":`,
        error
      )
    }
  }
}
