import { createReadStream, createWriteStream } from 'fs'
import * as unzipper from 'unzipper'

async function unzipFile(
  zipFilePath: string,
  targetDirectory: string
): Promise<void> {
  const readStream = createReadStream(zipFilePath)
  const writeStream = createWriteStream(targetDirectory)

  return readStream
    .pipe(unzipper.Extract({ path: targetDirectory }))
    .on('finish', () => {
      console.log(`File successfully unzipped to: ${targetDirectory}`)
    })
    .on('error', (error) => {
      console.error('Error unzipping file:', error)
    })
    .pipe(writeStream)
}

export function unzip() {
  // 替换为你要解压缩的文件路径和目标目录
  const zipFilePath = 'path/to/your/archive.zip'
  const targetDirectory = 'path/to/your/destination'

  // 执行解压缩
  unzipFile(zipFilePath, targetDirectory).catch((error) => {
    console.error('Error during unzip:', error)
  })
}
