# touch

使用 linux `touch` 命令创建文件，或者 windows `ni` 命令创建文件

## 用法

```sh
icall touch [-f] <ext> <file> <...>
```

## 示例

```sh
icall touch -f react 'index.tsx' 'about.tsx'
icall touch -f vue 'index.vue' 'about.vue'

# output
# File "C:\Users\Administrator\Desktop\call-cli\call-cli\index.tsx" created successfully. [1/1]
```

## 实现

```ts
import * as path from 'path'
import fs from 'fs/promises'

import { successMessage, errorMessage } from '../utils/color'

export async function createFiles(files: string[]) {
  const currentDirectory = process.cwd()
  const filesArr = files.map((f: string, i: number) => [i, f]) satisfies [
    number,
    string,
  ][]

  for (const [index, file] of filesArr) {
    const filePath = path.join(currentDirectory, file) // 构建文件路径
    try {
      await fs.writeFile(filePath, '')
      console.log(
        `File "${successMessage(filePath)}" created ${successMessage(
          'successfully'
        )}. [${files.length}/${index + 1}]`
      )
    } catch (error) {
      console.error(
        `[${files.length}/${index + 1}] Error creating "${errorMessage(
          filePath
        )}":`,
        error
      )
    }
  }
}
```

