import * as mkdirp from 'mkdirp'

export { readFileSync, writeFileSync, existsSync } from 'fs'
export { resolve, dirname } from 'path'
export const mkdirpSync = mkdirp.sync
export const cwd = () => process.cwd()
