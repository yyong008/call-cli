# cat

输出文件的内容

## 用法

```sh
icall cat <path>
```


## 示例


```sh
icall cat ./index.ts
```


## 实现

```js
import * as fs from 'fs'
import path from 'path'

export function cat(f: string) {
  const file = path.join(process.cwd(), f)
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err.message}`)
      process.exit(1)
    }
    // 打印文件内容
    console.log(data)
  })
}
```

icall 中的 cat 命令使用 nodejs 的 fs 读取文件方式显示 cat 命令。
