# day

通过 `day.js` 实现当前日期。

## 用法

```sh
icall day [format]
```

## 示例

```sh
icall day

# date: 2023-11-13 19:15:25
```


## 实现

```ts
import dayjs from 'dayjs'
import { successMessage } from '../utils/color'

export function formatDay(format: string) {
  const date = dayjs().format(format)
  console.log('date:', successMessage(date))
}
```

## 默认的格式

- `YYYY-MM-DD HH:mm:ss`

## 使用其他的格式

```sh
icall day YYYY-MM-DD
icall day HH:mm:ss
```

