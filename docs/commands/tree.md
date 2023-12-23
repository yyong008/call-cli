# Tree

tree 展示文件夹下的内容

## 用法

```sh
tree [path]
```

## 示例

```sh
tree ./

C:\Users\Administrator\Desktop\call-cli\call-cli
├── build.config.ts
├── CHANGELOG.md
├── dist
├── docs
├── env.d.ts
├── node_modules
├── package.json
├── pnpm-lock.yaml
├── README.md
├── src
├── TODO.md
├── tsconfig.json
└── vitest.config.ts

directory: 4 file: 9
```

## 实现

```ts
import _tree from 'tree-cli'

export async function tree() {
  const data = await _tree({
    base: process.cwd(),
  })
  console.log(data.report)
}
```

## 依赖

- [tree-cli]()
