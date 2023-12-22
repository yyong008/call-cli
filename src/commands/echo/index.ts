import readline from 'readline'
import { successMessage } from '../../utils/color'

export function echo() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  rl.setPrompt(`${successMessage('Enter')}: `)

  rl.prompt()

  rl.on('line', (input) => {
    console.log(`${successMessage('You typed')}: ${input}`)
    rl.prompt()
  })

  rl.on('close', () => {
    console.log('Goodbye!')
    process.exit(0)
  })
}
