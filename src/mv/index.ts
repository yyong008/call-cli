import * as fse from 'fs-extra'
import * as path from 'path'
export function mv(sourcePath: string, destinationPath: string) {
  try {
    fse.move(
      path.join(process.cwd(), sourcePath),
      path.join(process.cwd(), destinationPath)
    )
    console.log('move end')
  } catch (error) {
    console.log(error)
  }
}
