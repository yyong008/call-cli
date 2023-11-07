import { Command } from 'commander'

import { createFiles } from './touch/createFiles'
import { rm } from './rm'
import { useHosts } from './ping'

const program = new Command()

program
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

program
  .command('create')
  .option('-f, --framework <name>', 'to fill simple code', '')
  .action((...opts) => {
    console.log(opts)
  })

program.parse(process.argv)
