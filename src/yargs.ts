import * as yargs from 'yargs'

const args = yargs
  // @ts-ignore
  .help(false)
  // @ts-ignore
  .version(false)

export function getYArgs() {
  return args
}

export function baseOptions(yargs: yargs.Argv): yargs.Argv {
  return yargs
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
}
