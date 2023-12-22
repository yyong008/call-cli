# mkdir

创建文件夹

## 使用方法

```sh
icall mkdir <dir_name>
```

## 示例

```sh
call mkdir abc
```

## 实现

```ts
import * as fs from 'fs'
import * as path from 'path'
import { errorMessage, successMessage } from '../utils/color'

export function mkdirp(dir: string, sep: string) {
  const parts = dir.split(sep ? sep : path.sep)

  for (let i = 1; i <= parts.length; i++) {
    const currentPath = path.join(...parts.slice(0, i))
    if (!fs.existsSync(currentPath)) {
      fs.mkdirSync(currentPath)
      console.log(`dir: ${successMessage(currentPath)}/ created`)
    } else {
      console.log(`dir: ${errorMessage(currentPath)}/ existed`)
    }
  }
}
```

mkdir 基于 node.js 实现。

::: warning
目前创建文件时候使用文件路径分隔符要符合系统: 例如：

- windows: `\\`
- linux/macOS: `/`
:::
