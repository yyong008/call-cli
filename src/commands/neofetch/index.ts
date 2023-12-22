import { type SystemInfo, captureSystemInfo } from './utils'
import { successMessage } from '../../utils/color'

export function neofetch() {
  const info: SystemInfo = captureSystemInfo()
  Object.keys(info).forEach((key) => {
    console.log(
      `${successMessage(key as keyof SystemInfo)}: ${
        info[key as keyof SystemInfo]
      }`
    )
  })
  console.log()
}
