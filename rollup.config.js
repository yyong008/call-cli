import * as path from 'path'

import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import { fileURLToPath } from 'node:url'

import { defineConfig } from "rollup";

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  input: path.join(__dirname, "./src/index.ts"),
  output: {
    dir: "./dist",
    format: "es",
  },
  plugins: [
    nodeResolve(),
    typescript(),
    commonjs(),
  ]
});
