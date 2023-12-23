# history

获取终端输出的历史信息（如果有的话）

## usage

```sh
icall history
```

## 示例

```sh
call history
```

## 实现

```ts
import { exec } from 'child_process'

export function history() {
  const command = 'history'
  // 判断 window 环境
  if (process.platform === 'win32') {
    console.log('Windows is not yet supported.')
    return
  }

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`)
      return
    }

    if (stderr) {
      console.error(`Error: ${stderr}`)
      return
    }

    console.log('Command History:')
    console.log(stdout)
  })
}
```

不同的 shell 环境，history 命令不一样。
