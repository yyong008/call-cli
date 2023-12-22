# ipconfig

获取本机的 ipconfig 或者 ifconfig 信息

## 用法

```sh
icall ipconfig
```

## 示例

```sh
icall ipconfig # on windows

Windows IP 配置


无线局域网适配器 本地连接* 1:

   媒体状态  . . . . . . . . . . . . : 媒体已断开连接
   连接特定的 DNS 后缀 . . . . . . . :

无线局域网适配器 本地连接* 4:

   媒体状态  . . . . . . . . . . . . : 媒体已断开连接
   连接特定的 DNS 后缀 . . . . . . . :

无线局域网适配器 WLAN:

   连接特定的 DNS 后缀 . . . . . . . :
   本地链接 IPv6 地址. . . . . . . . : xxxx::xxxx:xxxx:xxxx:8362%19
   IPv4 地址 . . . . . . . . . . . . : xxx.xxx.x.xxx
   子网掩码  . . . . . . . . . . . . : xxx.xxx.xxx.x
   默认网关. . . . . . . . . . . . . : xxx.xxx.x.x

以太网适配器 蓝牙网络连接:

   媒体状态  . . . . . . . . . . . . : 媒体已断开连接
   连接特定的 DNS 后缀 . . . . . . . :

以太网适配器 vEthernet (Default Switch):

   连接特定的 DNS 后缀 . . . . . . . :
   本地链接 IPv6 地址. . . . . . . . : xxxx::xxxx:xxxx:xxxx:ea6e%26
   IPv4 地址 . . . . . . . . . . . . : xxx.xx.xxx.x
   子网掩码  . . . . . . . . . . . . : xxx.xxx.xxx.x
   默认网关. . . . . . . . . . . . . :

以太网适配器 vEthernet (WSL (Hyper-V firewall)):

   连接特定的 DNS 后缀 . . . . . . . :
   本地链接 IPv6 地址. . . . . . . . : xxxx::xxxx:xxx:xxxx:8be6%49
   IPv4 地址 . . . . . . . . . . . . : xxx.xx.xxx.x
   子网掩码  . . . . . . . . . . . . : xxx.xxx.xxx.x


```

## 实现

```ts
import { exec } from 'child_process'
import iconv from 'iconv-lite'

export function ipconfig() {
  let command = 'ipconfig'

  if (process.platform === 'win32') {
    command = 'ipconfig'
  } else {
    command = 'ifconfig'
  }

  exec(command, { encoding: 'binary' }, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${iconv.decode(error?.message, 'cp936')}`)
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
