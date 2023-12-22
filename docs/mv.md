# mv

移动文件和文件夹

## 用法

```sh
icall mv <source> <target>
```

## 示例

```sh
icall mv exmaple.ts ./example/example.ts
icall mv exmaple ./example/target
```

## 实现

```ts
import * as fse from 'fs-extra'
import * as path from 'path'

export function mv(sourcePath: string, destinationPath: string) {
  try {
    fse.move(
      path.join(process.cwd(), sourcePath),
      path.join(process.cwd(), destinationPath)
    )
    console.log('move end')
  } catch (error) {
    console.log(error)
  }
}
```

## 依赖

- [fse-extra](https://www.npmjs.com/package/fs-extra) 添加 fs 模块中未包含的文件系统方法，并向 fs 这些方法添加 promise 支持。
