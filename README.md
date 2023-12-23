# icall-cli

[iCall CLI](https://call-cli.vercel.app/) is a user-friendly and convenient command-line interface designed for cross-platform compatibility.

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
|[base64](https://call-cli.vercel.app/base64.html)|Generate a Base64 encoded string from a given string.|
|[cat](https://call-cli.vercel.app/cat.html)|Output the contents of a file.|
|[cowsay](https://call-cli.vercel.app/cowsay.html)|cowsay is a configurable talking cow, originally written in Perl by Tony Monroe|
|[cp](https://call-cli.vercel.app/cp.html)|copy files or dir|
|[day](https://call-cli.vercel.app/day.html)|format date by dayjs|
|[hash](https://call-cli.vercel.app/hash.html)|Generate a Hash|
|[history](https://call-cli.vercel.app/history.html)|Generate history in terminal|
|[ipconfig](https://call-cli.vercel.app/ipconfig.html)|Generate ipconfig or ifconfig|
|[kill](https://call-cli.vercel.app/kill.html)|kill process by pid|
|[ls](https://call-cli.vercel.app/ls.html)|Generate ls|
|[mkdir](https://call-cli.vercel.app/mkdir.html)|Generate dir|
|[mv](https://call-cli.vercel.app/mv.html)|move file or dir|
|[neofetch](https://call-cli.vercel.app/neofetch.html)|show system info|
|[ping](https://call-cli.vercel.app/ping.html)|ping domains|
|[ps](https://call-cli.vercel.app/ps.html)|Generate process|
|[qrcode](https://call-cli.vercel.app/qrcode.html)|Generate qrcode|
|[rm](https://call-cli.vercel.app/rm.html)|remove file or dir|
|[top](https://call-cli.vercel.app/top.html)|top command by top|
|[touch](https://call-cli.vercel.app/touch.html)|create file|
|[tree](https://call-cli.vercel.app/tree.html)|get tree|
|[which](https://call-cli.vercel.app/which.html)|get input command position|
|[whoami](https://call-cli.vercel.app/whoami.html)|current user|

## Todo

|name|desc|
|---|---|
|[cd](https://call-cli.vercel.app/cd.html)|switch pwd|
|[exec](https://call-cli.vercel.app/exec.html)|exec some command|
|[unzip](https://call-cli.vercel.app/unzip.html)|unzip files|
|[wget](https://call-cli.vercel.app/wget.html)|get some content|
