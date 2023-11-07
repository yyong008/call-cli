# icall-cli

A user-friendly CLI initialization

- [docs](https://call-cli.vercel.app/)

## npm

```sh
pnpm add icall-cli # your will get call command
```

## usage

- touch

```sh
# create react tsx file
icall touch -f react Abc.tsx Def.tsx
icall touch -f vue index.vue about.vue
```

- rm

```sh
# remove
icall rm Abc.tsx Def.tsx
icall rm index.vue about.vue
```

## clone

```ts
git clone https://github.com/yyong008/call-cli.git

pnpm install

pnpm run build

npm link
```

## usage in dev

```sh
pnpm run dev touch -f react index.tsx about.tsx
pnpm run dev touch -f vue index.vue about.vue
```


## Todo

remove

- rm file.tsx
- rm -rf ./**.*

