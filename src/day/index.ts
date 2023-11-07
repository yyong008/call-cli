import dayjs from 'dayjs'
import { successMessage } from '../utils/color'
export function formatDay(format: string) {
  const date = dayjs().format(format)
  console.log('date:', successMessage(date))
}
