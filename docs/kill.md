# kill

根据 `pid` 结束进程

## 使用

```sh
icall kill <pid>
```

::: tip
tip: 可使用系统自带的工具查看，或者使用 `ps` 等相关的命令，icall 也提供 ps 命令获取, 可以获取 pid.
:::

## 示例

```sh
icall kill 12345
```

## 实现

```ts
import { exec } from 'child_process'
import iconv from 'iconv-lite'

export function kill(processId: string) {
  let killCommand = ''

  if (process.platform === 'win32') {
    // Windows 上使用 taskkill 命令
    killCommand = `taskkill /F /PID ${processId}`
  } else {
    // Linux 上使用 kill 命令
    killCommand = `kill -9 ${processId}`
  }

  // 执行终止命令
  exec(killCommand, { encoding: 'binary' }, (error, stdout, stderr) => {
    if (error) {
      console.error(
        `error: ${iconv.decode(Buffer.from(error.message, 'binary'), 'cp936')}`
      )
      return
    }

    if (stderr) {
      console.error(
        `stderr: ${iconv.decode(Buffer.from(stderr, 'binary'), 'cp936')}`
      )
      return
    }

    const utf8Stdout = iconv.decode(Buffer.from(stdout, 'binary'), 'cp936')
    console.log(`stdout: ${utf8Stdout}`)
  })
}
```

在 windows 中 taskkill 命令执行结束进程，在 unix 总使用 kill 执行命令。

## 依赖

- [iconv-lite](https://www.npmjs.com/package/iconv-lite) 纯JS字符编码转换
