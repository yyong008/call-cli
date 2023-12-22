import * as fs from 'fs'
import * as path from 'path'
import { successMessage } from '../../utils/color'

export function listFilesAndDirectories(_directoryPath: string = './') {
  const directoryPath = path.join(process.cwd(), _directoryPath)

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error(`Error reading directory: ${err.message}`)
      return
    }

    files.forEach((file) => {
      const filePath = path.join(directoryPath, file)
      fs.stat(filePath, (statErr, stats) => {
        if (statErr) {
          console.error(`Error getting file stats: ${statErr.message}`)
          return
        }

        if (stats.isFile()) {
          console.log(`${file}`)
        } else if (stats.isDirectory()) {
          console.log(`${successMessage(file)}/`)
        }
      })
    })
  })
}
