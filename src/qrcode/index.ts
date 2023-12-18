import qr from 'qrcode'

export function qrcode(str: string) {
  gnQrcode(str)
}

function gnQrcode(str: string) {
  qr.toString(str, { type: 'terminal', width: 100 }, (err, url) => {
    if (err) throw err
    console.log(url)
  })
}
