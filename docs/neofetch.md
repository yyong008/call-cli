# neofetch

获取系统信息。

:::warning
实现跨平台的 neofetch
:::

## 用法

```sh
icall neofetch
```

## 示例

```sh
call neofetch

# Username: Administrator
# Host: DESKTOP-MCAEOQA
# OS: Windows 10 Pro x64
# Build: 10.0.22621
# Uptime: 2 Days, 19 Hours, 49 Mins, 34.98399999999674 Secs
# CPU: AMD Ryzen 5 5500U with Radeon Graphics
# RAM: 9928MB / 15706MB (63%)
# GPUS: AMD Radeon(TM) Graphics
# Motherboard: xxxx          xxxxx
```

## 实现

```ts
import { type SystemInfo, captureSystemInfo } from './utils'
import { successMessage } from '../utils/color'

export function neofetch() {
  const info: SystemInfo = captureSystemInfo()
  Object.keys(info).forEach((key) => {
    console.log(
      `${successMessage(key as keyof SystemInfo)}: ${
        info[key as keyof SystemInfo]
      }`
    )
  })
  console.log()
}
```
