import { Command } from 'commander'

import pkg from '../package.json'

import { createFiles } from './commands/touch'
import { rm } from './commands/rm'
import { useHosts } from './commands/ping'
import { formatDay } from './commands/day'

const program = new Command()

program
  .version(pkg.version)
  .command('touch')
  .option('-f, --framework <name>', 'to fill simple code', '')
  .action((...opts) => {
    createFiles(opts[1].args)
  })

program
  .command('rm')
  .option('-d, --dir <name>', 'a ', '')
  .action((...opts) => {
    rm(opts[1].args)
  })

program.command('ping').action((...opts) => {
  useHosts(opts[1].args)
})

program.command('top').action(async () => {
  const { getData } = await import('./commands/top')
  getData()
})

program.command('day').action((...opts) => {
  const format = opts[1].args[0] || 'YYYY-MM-DD HH:mm:ss'
  formatDay(format)
})

program.command('cat').action(async (...opts) => {
  const { cat } = await import('./commands/cat')
  cat(opts[1].args[0])
})

program.command('ls').action(async (...opts) => {
  const { listFilesAndDirectories } = await import('./commands/ls')
  listFilesAndDirectories(opts[1].args[0])
})

program
  .command('mkdir')
  .option(
    '-s, --sep <name>',
    'default use system windows "\\" and linux "/"',
    ''
  )
  .action(async (...opts) => {
    const { mkdirp } = await import('./commands/mkdir')
    mkdirp(opts[1].args[0], opts[0].sep)
  })

program.command('which').action(async (...opts) => {
  const { which } = await import('./commands/which')
  which(opts[1].args[0])
})

program.command('cd').action(async (...opts) => {
  const { changeDirectory } = await import('./unstale_commands/cd')
  console.log(opts[1].args[0])
  changeDirectory(opts[1].args[0])
})

program.command('cp').action(async (...opts) => {
  const { cp } = await import('./commands/cp')
  cp(opts[1].args[0], opts[1].args[1])
})

program.command('mv').action(async (...opts) => {
  const { mv } = await import('./commands/mv')
  mv(opts[1].args[0], opts[1].args[1])
})

program.command('whoami').action(async () => {
  const { whoami } = await import('./commands/whoami')
  whoami()
})

program.command('tree').action(async () => {
  const { tree } = await import('./commands/tree')
  tree()
})

program.command('ps').action(async () => {
  const { ps } = await import('./commands/ps')
  ps()
})

program.command('kill').action(async (...opts) => {
  const { kill } = await import('./commands/kill')
  kill(opts[1].args[0])
})

program.command('neofetch').action(async () => {
  const { neofetch } = await import('./neofetch')
  neofetch()
})

program.command('echo').action(async () => {
  const { echo } = await import('./commands/echo')
  echo()
})

program.command('cowsay').action(async (...opts) => {
  const { cowsay } = await import('./commands/cowsay')
  cowsay(opts[1].args[0])
})

program.command('history').action(async () => {
  const { history } = await import('./commands/history')
  history()
})

program
  .option('-l, --len <length>', 'a', '')
  .command('hash')
  .action(async (...opts) => {
    const { hash } = await import('./commands/hash')

    hash(opts[1].args[0], opts[1].args[1]) // pnpm run dev hash asdf 10
  })

program
  // .option('-l, --len <length>', 'a', '')
  .command('base64')
  .action(async (...opts) => {
    const { base64 } = await import('./commands/base64')

    base64(opts[1].args[0], opts[1].args[1]) // pnpm run dev hash asdf 10
  })

program
  // .option('-l, --len <length>', 'a', '')
  .command('qrcode')
  .action(async (...opts) => {
    const { qrcode } = await import('./commands/qrcode')

    qrcode(opts[1].args[0]) // pnpm run dev hash asdf 10
  })

program
  .command('ipconfig')
  .alias('ifconfig')
  .action(async () => {
    const { ipconfig } = await import('./commands/ipconfig')

    ipconfig()
  })

// program
//   .command('x')
//   // .option('-f, --framework <name>', 'to fill simple code', '')
//   .action(async(...opts) => {
//     const { x } = await import('./x')
//     // console.log(opts[1].args.join(" "))
//     x()
//   })

program.parse(process.argv)
