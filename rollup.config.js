import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import pkg from './package.json';

/** @type {import("rollup").RollupOptions} */
const options = {
  input: 'src/index.ts',
  output: [
    {
      name: 'powerseq',
      file: pkg.browser,
      format: 'umd',
      sourcemap: true,
    },
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    typescript(),
    terser(),
  ]
};

export default options;
