import fs from 'fs'
import { join } from 'path'
import { successMessage, errorMessage } from '../utils/color'

export function rm(files: string[]) {
  rmByArray(files)
}

function rmByArray(files: string[]) {
  const currentDirectory = process.cwd()

  files.forEach((f: string) => {
    const filePath = join(currentDirectory, f)
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error(`delete file ${errorMessage(filePath)} error:`, err)
      } else {
        console.log(`file ${successMessage(filePath)} deleted`)
      }
    })
  })
}
