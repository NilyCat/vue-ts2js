import { readFileSync } from 'fs'
import globby from 'globby'
import { CompilerOptions, transpile } from 'typescript'
// @ts-ignore
import vueSfcToString from 'vue-sfc-descriptor-to-string'
import { parseComponent } from 'vue-template-compiler'
import { compilerOptions } from './tsconfig'
import { cwd, dirname, mkdirpSync, resolve, writeFileSync } from './utils'

export interface Configs {
  directory: string
  project: string
  output: string
}

export async function process(configs: Configs): Promise<void> {
  const dir = resolve(cwd(), configs.directory)
  const output = resolve(cwd(), configs.output)

  const paths = await globby(dir, {
    onlyFiles: true,
    expandDirectories: {
      extensions: ['vue']
    }
  })

  const options = compilerOptions(resolve(cwd(), configs.project))

  paths.forEach(path => {
    const filePath = path.replace(dir, output)
    const fileDir = dirname(filePath)
    const content = compile(path, options)

    // Create directory
    mkdirpSync(fileDir)

    writeFileSync(filePath, content)
  })
}

export function compile(path: string, options: CompilerOptions): string {
  const content = readFileSync(path).toString('utf-8')
  const sfc = parseComponent(content)

  if (sfc.script && sfc.script.lang === 'ts') {
    sfc.script.lang = 'js'
    sfc.script.attrs.lang = 'js'
    sfc.script.content = ['\n', transpile(sfc.script.content, options)].join('')
  }

  return vueSfcToString(sfc)
}
