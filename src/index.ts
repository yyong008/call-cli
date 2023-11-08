import { Command } from 'commander'

import { createFiles } from './touch/createFiles'
import { rm } from './rm'
import { useHosts } from './ping'
import { formatDay } from './day'

const program = new Command()

program
  // .version()
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
  const { getData } = await import('./top')
  getData()
})

program.command('day').action((...opts) => {
  const format = opts[1].args[0] || 'YYYY-MM-DD HH:mm:ss'
  formatDay(format)
})

program.command('cat').action(async (...opts) => {
  const { cat } = await import('./cat')
  cat(opts[1].args[0])
})

program.command('ls').action(async (...opts) => {
  const { listFilesAndDirectories } = await import('./ls')
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
    const { mkdirp } = await import('./mkdir')
    mkdirp(opts[1].args[0], opts[0].sep)
  })

program
  .command('create')
  .option('-f, --framework <name>', 'to fill simple code', '')
  .action((...opts) => {
    console.log(opts)
  })

program.parse(process.argv)
