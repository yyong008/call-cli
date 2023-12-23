import { Command } from 'commander'

import pkg from '../package.json'

export class ICall {
  program
  constructor() {
    this.program = new Command()

    this.__init__()
    this.program.parse(process.argv)
  }

  __init__() {
    this.version()
    this.touch()
    this.rm()
    this.ping()
    this.top()
    this.day()
    this.cat()
    this.ls()
    this.mkdir()
    this.which()
    this.cp()
    this.mv()
    this.whoami()
    this.tree()
    this.ps()
    this.kill()
    this.neofetch()
    this.cowsay()
    this.history()
    this.hash()
    this.base64()
    this.qrcode()
    this.ipconfig()
  }

  version() {
    this.program.version(pkg.version)
  }

  touch() {
    this.program
      .command('touch')
      .alias('create')
      .alias('new')
      .option('-f, --framework <name>', 'to fill simple code', '')
      .action(async (...opts) => {
        const { createFiles } = await import('./commands/touch')
        createFiles(opts[1].args)
      })
  }
  rm() {
    this.program
      .command('rm')
      .alias('delete')
      .option('-d, --dir <name>', 'a ', '')
      .action(async (...opts) => {
        const { rm } = await import('./commands/rm')
        rm(opts[1].args)
      })
  }

  ping() {
    this.program.command('ping').action(async (...opts) => {
      const { useHosts } = await import('./commands/ping')
      useHosts(opts[1].args)
    })
  }

  top() {
    this.program.command('top').action(async () => {
      const { getData } = await import('./commands/top')
      console.log('data')
      getData()
    })
  }

  day() {
    this.program.command('day').action(async (...opts) => {
      const { formatDay } = await import('./commands/day')
      const format = opts[1].args[0] || 'YYYY-MM-DD HH:mm:ss'
      formatDay(format)
    })
  }

  cat() {
    this.program
      .command('cat')
      .alias('type')
      .alias('gc')
      .alias('Get-Content')
      .action(async (...opts) => {
        const { cat } = await import('./commands/cat')
        cat(opts[1].args[0])
      })
  }
  ls() {
    this.program.command('ls').action(async (...opts) => {
      const { listFilesAndDirectories } = await import('./commands/ls')
      listFilesAndDirectories(opts[1].args[0])
    })
  }

  mkdir() {
    this.program
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
  }

  which() {
    this.program.command('which').action(async (...opts) => {
      const { which } = await import('./commands/which')
      which(opts[1].args[0])
    })
  }

  cp() {
    this.program.command('cp').action(async (...opts) => {
      const { cp } = await import('./commands/cp')
      cp(opts[1].args[0], opts[1].args[1])
    })
  }

  mv() {
    this.program.command('mv').action(async (...opts) => {
      const { mv } = await import('./commands/mv')
      mv(opts[1].args[0], opts[1].args[1])
    })
  }

  whoami() {
    this.program.command('whoami').action(async () => {
      const { whoami } = await import('./commands/whoami')
      whoami()
    })
  }

  tree() {
    this.program.command('tree').action(async () => {
      const { tree } = await import('./commands/tree')
      tree()
    })
  }

  ps() {
    this.program.command('ps').action(async () => {
      const { ps } = await import('./commands/ps')
      ps()
    })
  }

  kill() {
    this.program.command('kill').action(async (...opts) => {
      const { kill } = await import('./commands/kill')
      kill(opts[1].args[0])
    })
  }

  neofetch() {
    this.program.command('neofetch').action(async () => {
      const { neofetch } = await import('./commands/neofetch')
      neofetch()
    })
  }

  cowsay() {
    this.program.command('cowsay').action(async (...opts) => {
      const { cowsay } = await import('./commands/cowsay')
      cowsay(opts[1].args[0])
    })
  }

  history() {
    this.program.command('history').action(async () => {
      const { history } = await import('./commands/history')
      history()
    })
  }

  hash() {
    this.program
      .option('-l, --len <length>', 'a', '')
      .command('hash')
      .action(async (...opts) => {
        const { hash } = await import('./commands/hash')

        hash(opts[1].args[0], opts[1].args[1]) // pnpm run dev hash asdf 10
      })
  }

  base64() {
    this.program
      // .option('-l, --len <length>', 'a', '')
      .command('base64')
      .action(async (...opts) => {
        const { base64 } = await import('./commands/base64')

        base64(opts[1].args[0], opts[1].args[1]) // pnpm run dev hash asdf 10
      })
  }

  qrcode() {
    this.program
      // .option('-l, --len <length>', 'a', '')
      .command('qrcode')
      .action(async (...opts) => {
        const { qrcode } = await import('./commands/qrcode')

        qrcode(opts[1].args[0]) // pnpm run dev hash asdf 10
      })
  }

  ipconfig() {
    this.program
      .command('ipconfig')
      .alias('ifconfig')
      .action(async () => {
        const { ipconfig } = await import('./commands/ipconfig')

        ipconfig()
      })
  }
}

export class UnstableICall extends ICall {
  constructor() {
    super()
  }

  cd() {
    this.program.command('cd').action(async (...opts) => {
      const { changeDirectory } = await import('./unstale_commands/cd')
      console.log(opts[1].args[0])
      changeDirectory(opts[1].args[0])
    })
  }

  echo() {
    this.program.command('echo').action(async () => {
      const { echo } = await import('./commands/echo')
      echo()
    })
  }
  x() {
    // program
    //   .command('x')
    //   // .option('-f, --framework <name>', 'to fill simple code', '')
    //   .action(async(...opts) => {
    //     const { x } = await import('./x')
    //     // console.log(opts[1].args.join(" "))
    //     x()
    //   })
  }
}

new ICall()
