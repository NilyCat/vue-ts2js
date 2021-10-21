#!/usr/bin/env node

import { process } from './core'
import * as yargs from 'yargs'

const configs: any = yargs
  .help(false)
  .version(false)
  .usage('Usage: $0 -d [dir] -p [tsconfig.json]')
  .option('directory', {
    demand: true,
    alias: 'd',
    describe: 'Vue files directory',
    type: 'string'
  })
  .option('output', {
    demand: true,
    alias: 'o',
    describe: 'Output directory',
    type: 'string'
  })
  .option('project', {
    demand: true,
    alias: 'p',
    describe: "TypeScript configuration file, eg:'tsconfig.json'.",
    type: 'string'
  })
  .wrap(yargs.terminalWidth())
  .recommendCommands().argv

process(configs)
