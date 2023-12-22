# ls

展示指定位置的`文件`、`文件夹`列表。

## 用法

```sh
icall ls [path]
```

## 示例

```sh
icall ls

# .editorconfig
# .changeset/
# .eslintrc.cjs
# .git/
# .husky/
# .gitignore
# build.config.ts
# .prettierrc
# CHANGELOG.md
# docs/
# node_modules/
# dist/
# env.d.ts
# package.json
# pnpm-lock.yaml
# src/
# tsconfig.json
# README.md
# vitest.config.ts
# TODO.md
```

## 实现

```ts
import * as fs from 'fs'
import * as path from 'path'
import { successMessage } from '../utils/color'

export function listFilesAndDirectories(_directoryPath: string = './') {
  const directoryPath = path.join(process.cwd(), _directoryPath)

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error(`Error reading directory: ${err.message}`)
      return
    }

    files.forEach((file) => {
      const filePath = path.join(directoryPath, file)
      fs.stat(filePath, (statErr, stats) => {
        if (statErr) {
          console.error(`Error getting file stats: ${statErr.message}`)
          return
        }

        if (stats.isFile()) {
          console.log(`${file}`)
        } else if (stats.isDirectory()) {
          console.log(`${successMessage(file)}/`)
        }
      })
    })
  })
}
```
