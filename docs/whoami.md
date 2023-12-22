# whoami

## 用法

```sh
icall whoami
```

## 示例

```sh
call whoami # on windows

# output
# Administrator
```

## 实现

```ts
import * as os from 'os'

export function whoami() {
  const username = os.userInfo().username
  console.log(username)
}
```
