# cp

复制和复制文件夹

## 用法

```sh
icall cp <source> <destination>
```

## 示例

```sh
icall cp ./example.ts example.to.ts
```

## 实现

```ts
import * as fse from 'fs-extra'
import * as path from 'path'

export function cp(sourcePath: string, destinationPath: string) {
  try {
    fse.copy(
      path.join(process.cwd(), sourcePath),
      path.join(process.cwd(), destinationPath)
    )
    console.log('copy end')
  } catch (error) {
    console.log(error)
  }
}

```

`icall cp` 命令依赖于 `fse` 命令，快速实现 `cp` 命令。

## 依赖

- [fse-extra](https://www.npmjs.com/package/fs-extra) 添加 fs 模块中未包含的文件系统方法，并向 fs 这些方法添加 promise 支持。
