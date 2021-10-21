import { isValid } from '@nily/utils'
import { CompilerOptions } from 'typescript'
import { dirname, resolve } from './utils'

export function compilerOptions(path: string): CompilerOptions {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const content: any = require(path)

  if (isValid(content.extends)) {
    let p = dirname(path)
    p = resolve(p, content.extends)

    return {
      ...compilerOptions(p),
      ...content.compilerOptions,
      sourceMap: false
    }
  } else {
    return {
      ...content.compilerOptions,
      sourceMap: false
    }
  }
}
