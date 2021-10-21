import { cwd, resolve } from '../src/utils'
import { compilerOptions } from '../src/tsconfig'

describe('tsconfig', () => {
  test('compilerOptions', () => {
    expect(compilerOptions(resolve(cwd(), 'tsconfig.json'))).toMatchSnapshot()
    expect(compilerOptions(resolve(cwd(), 'tsconfig-build.json'))).toMatchSnapshot()
  })
})
