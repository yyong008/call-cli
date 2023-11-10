import * as _cowsay from 'cowsay'

export function cowsay(content: string) {
  try {
    const ct = _cowsay.say({ text: content })
    console.log(ct)
    console.log()
  } catch (error) {
    console.log(error)
  }
}
