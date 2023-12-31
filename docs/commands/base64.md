# base64

## 描述

根据字符串生成 base64 编码字符串

## 用法

```sh
icall hash base64 <str>
```

## 示例

```sh
icall hash base64 "hello world"

base64: aGVsbG8gd29ybGQ=
```

## 实现

```ts
import { successMessage } from '../utils/color'

export function base64(str: string, de: unknown) {
  if (de) {
    console.log('deBase64: ' + successMessage(deBase64(str)))
    return
  }
  console.log('base64: ' + successMessage(toBase64(str)))
  console.log()
}

function toBase64(str: string) {
  return Buffer.from(str).toString('base64')
}

function deBase64(str: string) {
  return Buffer.from(str, 'base64').toString()
}
```
