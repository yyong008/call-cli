import * as fse from 'fs-extra'
import * as path from 'path'
export function cp(sourcePath: string, destinationPath: string) {
  try {
    fse.copy(
      path.join(process.cwd(), sourcePath),
      path.join(process.cwd(), destinationPath)
    )
    console.log('copy end')
  } catch (error) {
    console.log(error)
  }
}
