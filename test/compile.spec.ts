import { compile } from '../src/core'
import { cwd, resolve } from '../src/utils'

describe('compile', () => {
  test('compile', () => {
    const path = resolve(cwd(), './test/fixtures/index.vue')
    expect(
      compile(path, {
        target: 'es2020' as any,
        sourceMap: false
      })
    ).toMatchSnapshot()
  })
})
