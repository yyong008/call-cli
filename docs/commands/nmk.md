# nmk

移除当前目录下的 `node_modules` 文件夹

## 用法

```sh
icall nmk
```

## 示例

```sh
cd <target_dir>
icall nmk
```

## 实现

```ts
import { F_OK } from 'node:constants'
import { execSync } from 'node:child_process'
import fs from 'node:fs'
import fsp from 'node:fs/promises'
import ora from 'ora'
import path from 'path'

const NODE_MODULES = 'node_modules'
const CUREENT_DIR = process.cwd()
const CUREENT_NODE_MODULE_PATHS = path.join(CUREENT_DIR, NODE_MODULES)

let spinner: any = null;

export async function killCurrentDirNodeModules() {
  spinner = ora('🏄‍♂️ nmk start').start()
  const hasNodeModulesDir = await hasNodeModulesSync()

  if (hasNodeModulesDir) {
    try {
      spinner.color = 'red'
      spinner.text  = 'deleting...'
      await deleteFolderRecursive(CUREENT_NODE_MODULE_PATHS)
      spinner.text = 'end'
      console.log("\n")
      spinner.succeed(`🎉 删除完成\n`);
      spinner.stop()
    } catch (error) {
      console.log('error', error)
    }
  } else {
    console.log("\n")
    spinner.info('👀 no node_modules dir\n')
    spinner.stop()

  }

   process.on('exit', () => {
    spinner = null;
  })
}

async function hasNodeModulesSync() {

  return await exists(CUREENT_NODE_MODULE_PATHS)
}

async function exists(path: string) {

  try {
    await fsp.access(path, F_OK);
    return true
  } catch (error) {
    return false
  }
}

async function deleteFolderRecursive(folderPath: string) {
  const consoleDelete = (str: string) => {
    spinner.text = `[Delete]: ${str}`
  }
  const deleteFileWithChomd = (curPath: string) => {
    if (process.platform !== 'win32') {
      fs.chmodSync(curPath, 0o777) // 修改文件权限
      fs.unlinkSync(curPath)
    } else {
      // 实现系统级删除
      execSync(`del "${curPath}"`)
    }
  }
  if (await exists(folderPath)) {
    const files = await fsp.readdir(folderPath)
    for(const file of files) {
      const curPath = path.join(folderPath, file)
      try {
        if ((await fsp.lstat(curPath)).isSymbolicLink()) {
          await fsp.unlink(curPath)
          consoleDelete(`${curPath}`)
        } else if ((await fsp.lstat(curPath)).isDirectory()) {
          await deleteFolderRecursive(curPath)
        } else {
          await fsp.unlink(curPath)
          consoleDelete(`${curPath}`)
        }
      } catch (error: any) {
        if (error.code === 'EPERM' || error.code === 'EACCES') {
          fs.chmodSync(curPath, 0o777) // 修改文件权限
          try {
            await deleteFileWithChomd(curPath)
            consoleDelete(`${curPath}`)
          } catch (chmodErr: any) {
            console.error(`修改权限并删除文件时出错：${chmodErr.message}`)
          }
        } else if (error.code === 'ENOENT') {
          console.error(`路径不存在或已删除：${curPath} ${error.message}`)
        } else if (error.code === 'MODULE_NOT_FOUND') {
          console.error(`模块未找到错误：${error.message}`)
        } else {
          console.error(`删除文件或文件夹时出错：${error.message}`)
        }
      }
    }
    await fsp.rmdir(folderPath)
  }

}
```

## 依赖

- [ora](https://www.npmjs.com/package/ora) 良好的交互支持
