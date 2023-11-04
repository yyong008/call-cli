import { Command } from 'commander'

import { createFiles } from './touch/createFiles'

const program = new Command()

program
  .command('touch')
  .option('-f, --framework <name>', 'to fill simple code', '')
  .action((...opts) => {
    createFiles(opts[1].args)
  })

program.parse(process.argv)