# icall-cli

[iCall CLI](https://call-cli.vercel.app/commands/) is a user-friendly and convenient command-line interface designed for cross-platform compatibility.

## install

```sh
pnpm add icall-cli
```

now your can use icall command

## create files

your can create files by icall touch command.

```sh
icall touch [-f] <ext> <file> <...>

icall touch -f react Abc.tsx Def.tsx
icall touch -f vue index.vue about.vue
```

your can remove files by icall rm command.

```sh
# remove
icall rm Abc.tsx Def.tsx
icall rm index.vue about.vue
```

## Commands

|name|desc|
|---|---|
|[base64](https://call-cli.vercel.app/commands/base64.html)|Generate a Base64 encoded string from a given string.|
|[cat](https://call-cli.vercel.app/commands/cat.html)|Output the contents of a file.|
|[cowsay](https://call-cli.vercel.app/commands/cowsay.html)|cowsay is a configurable talking cow, originally written in Perl by Tony Monroe|
|[cp](https://call-cli.vercel.app/commands/cp.html)|copy files or dir|
|[day](https://call-cli.vercel.app/commands/day.html)|format date by dayjs|
|[hash](https://call-cli.vercel.app/commands/hash.html)|Generate a Hash|
|[history](https://call-cli.vercel.app/commands/history.html)|Generate history in terminal|
|[ipconfig](https://call-cli.vercel.app/commands/ipconfig.html)|Generate ipconfig or ifconfig|
|[kill](https://call-cli.vercel.app/commands/kill.html)|kill process by pid|
|[ls](https://call-cli.vercel.app/commands/ls.html)|Generate ls|
|[mkdir](https://call-cli.vercel.app/commands/mkdir.html)|Generate dir|
|[mv](https://call-cli.vercel.app/commands/mv.html)|move file or dir|
|[neofetch](https://call-cli.vercel.app/commands/neofetch.html)|show system info|
|[ping](https://call-cli.vercel.app/commands/ping.html)|ping domains|
|[ps](https://call-cli.vercel.app/commands/ps.html)|Generate process|
|[qrcode](https://call-cli.vercel.app/commands/qrcode.html)|Generate qrcode|
|[rm](https://call-cli.vercel.app/commands/rm.html)|remove file or dir|
|[top](https://call-cli.vercel.app/commands/top.html)|top command by top|
|[touch](https://call-cli.vercel.app/commands/touch.html)|create file|
|[tree](https://call-cli.vercel.app/commands/tree.html)|get tree|
|[which](https://call-cli.vercel.app/commands/which.html)|get input command position|
|[whoami](https://call-cli.vercel.app/commands/whoami.html)|current user|

## Todo

|name|desc|
|---|---|
|[cd](https://call-cli.vercel.app/commands/cd.html)|switch pwd|
|[exec](https://call-cli.vercel.app/commands/exec.html)|exec some command|
|[unzip](https://call-cli.vercel.app/commands/unzip.html)|unzip files|
|[wget](https://call-cli.vercel.app/commands/wget.html)|get some content|
