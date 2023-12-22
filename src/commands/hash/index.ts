import * as crypto from 'crypto'
import { successMessage } from '../../utils/color'

export function hash(str: string, len: number) {
  const hash = crypto.createHash('sha256').update(str).digest('hex')
  if (len) {
    console.log('hash:' + successMessage(hash.slice(0, Number(len))))
    console.log()
    return
  }
  console.log('hash:' + successMessage(hash))
  console.log()
}
