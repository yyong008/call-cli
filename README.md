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

- ping

```sh
pnpm run dev ping '192.168.1.1' 'google.com' 'yahoo.com' 'baidu.com'
icall ping '192.168.1.1' 'google.com' 'yahoo.com' 'baidu.com'
```

## Todo

- ~~touch~~
- ~~remove~~
- tree
- ls/ll/...
- cat
- date
- time
- cd
- mv
- mkdir/mkdirp
- man
- chmod
- exit
- sudo
- ~~top/htop~~
- unzip
- echo
- ps
- kill
- ~~ping~~
- history
- vim/nvim
- passwd
- which
- shred
- less
- tail
- head
- grep
- whoami
- whatis
- wc
- uname
- neofetch
- find
- wget

