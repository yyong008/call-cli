# hash

将字符串生成 hash 字符串

## 用法

```sh
icall hash <str> [len]
```

## 示例

```sh
icall hash "hello"

# output
hash:2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824
```

## 实现

```ts
import * as crypto from 'crypto'
import { successMessage } from '../utils/color'

export function hash(str: string, len: number) {
  const hash = crypto.createHash('sha256').update(str).digest('hex')
  console.log(str, len)
  if (len) {
    console.log('hash:' + successMessage(hash.slice(0, Number(len))))
    console.log()
    return
  }
  console.log('hash:' + successMessage(hash))
  console.log()
}

```
