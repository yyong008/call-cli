import axios from 'axios'
import * as fs from 'fs'
import * as path from 'path'

async function downloadFile(
  fileUrl: string,
  targetPath: string
): Promise<void> {
  const response = await axios({
    method: 'get',
    url: fileUrl,
    responseType: 'stream',
  })

  const writer = fs.createWriteStream(targetPath)

  response.data.pipe(writer)

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve)
    writer.on('error', reject)
  })
}

export function wget() {
  // 替换为你要下载的文件URL和目标路径
  const fileUrl = 'https://example.com/path/to/file.zip'
  const targetPath = path.resolve(__dirname, 'downloaded-file.zip')

  // 执行下载
  downloadFile(fileUrl, targetPath)
    .then(() => {
      console.log(`Download complete: ${fileUrl}`)
    })
    .catch((error) => {
      console.error(`Download failed: ${fileUrl}`, error)
    })
}
