import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

/** @type {import("rollup").RollupOptions} */
const options = {
	input: 'src/index.ts',
	output: {
    name: 'powerseq',
		file: 'npmpackage/bundles/powerseq.es5.js',
    sourcemap: true,
		format: 'umd',
	},
	plugins: [
		typescript(),
		terser(),
	]
};

export default options;
