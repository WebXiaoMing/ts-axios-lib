import path from 'path'

import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import sourceMaps from 'rollup-plugin-sourcemaps'
import camelCase from 'lodash.camelcase'
import typescript from 'rollup-plugin-typescript2'
import json from 'rollup-plugin-json'
import alias from '@rollup/plugin-alias'

const pkg = require('./package.json')

const libraryName = 'ts-axios-lib'

const resolvePath = (p: string): string => path.join(__dirname, p)

export default {
  input: `src/index.ts`,
  output: [
    { file: pkg.main, name: camelCase(libraryName), format: 'umd', sourcemap: true },
    { file: pkg.module, format: 'es', sourcemap: true }
  ],
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
  external: [],
  watch: {
    include: 'src/**'
  },
  plugins: [
    // Allow json resolution
    json(),
    // Compile TypeScript files
    typescript({ useTsconfigDeclarationDir: true }),
    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs(),
    // Allow node_modules resolution, so you can use 'external' to control
    // which external modules to include in the bundle
    // https://github.com/rollup/rollup-plugin-node-resolve#usage
    resolve(),

    alias({
      entries: [
        { find: '@', replacement: resolvePath('./src') },
        { find: '@core', replacement: resolvePath('./src/core') },
        { find: '@utils', replacement: resolvePath('./src/utils') },
        { find: '@types', replacement: resolvePath('./src/types') }
      ]
    }),

    // Resolve source maps to the original source
    sourceMaps()
  ]
}
