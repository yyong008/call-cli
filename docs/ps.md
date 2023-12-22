# ps

获取系统的进程

## 用法

```sh
icall ps
```

## 示例

```sh
icall ps # on window

# stdout:
# 映像名称                       PID 会话名              会话#       内存使用
# ========================= ======== ================ =========== ============
# System Idle Process              0 Services                   0          8 K
# System                           4 Services                   0        156 K
# Secure System                  140 Services                   0     48,812 K
```

:::tip
在 ps 命令中，能够查看 PID, 如果需要结束进行配置 kill 使用非常方便。
:::

## 实现

```ts
import { exec } from 'child_process'
import iconv from 'iconv-lite'

export function ps() {
  let command = ''

  if (process.platform === 'win32') {
    command = 'tasklist'
  } else {
    command = 'ps aux'
  }

  exec(command, { encoding: 'binary' }, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${iconv.decode(error.message, 'cp936')}`)
      return
    }

    if (stderr) {
      console.error(`stderr: ${stderr}`)
      return
    }
    const decodedStdout = iconv.decode(Buffer.from(stdout, 'binary'), 'cp936')
    console.log(`stdout: ${decodedStdout}`)
  })
}
```


## 依赖

- [iconv-lite](https://www.npmjs.com/package/iconv-lite) 纯JS字符编码转换
