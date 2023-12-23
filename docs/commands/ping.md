# ping

检查地址是否在线（存活）

## 用法

```sh
icall ping <ip | domin>
```

## 示例

```sh
call ping baidu.com google.com

# output
# host baidu.com is alive
# host google.com is dead
```

## 实现

```sh
import ping from 'ping'
import { successMessage, errorMessage } from '../utils/color'

export function useHosts(hosts: string[]) {
  hosts.forEach(function (host) {
    ping.sys.probe(host, function (isAlive: boolean) {
      const msg = isAlive
        ? 'host ' + successMessage(host) + ' is ' + successMessage('alive')
        : 'host ' + errorMessage(host) + ' is ' + errorMessage('dead')
      console.log(msg)
    })
  })
}
```

## 依赖

- [ping](https://www.npmjs.com/package/ping) 一个 Node.js 的 ping 封装。
