# cowsay

say some something

## 用法

```sh
icall cowsay <string>
```

## 示例


```sh
call cowsay "hi ~"
```

- 输出

```sh
 ____
< hi >
 ----
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

## 实现

```sh
import * as _cowsay from 'cowsay'

export function cowsay(content: string) {
  try {
    const ct = _cowsay.say({ text: content })
    console.log(ct)
    console.log()
  } catch (error) {
    console.log(error)
  }
}
```

为了快速实现：`icall cowsay` 依赖 [cowsay](https://www.npmjs.com/package/cowsay)
