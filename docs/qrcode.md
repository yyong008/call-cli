# qrcode

在终端生成 qrcode

## 用法

```sh
icall qrcode 'https://www.baidu.com'
```

## 实现

```sh
icall qrcode <string>
```

## 实现

```ts
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

export function gnfile(str: string) {
  qr.toFile('./qrcode.png', str)
}
```

## 依赖

- [qrcode](https://www.npmjs.com/package/qrcode)

