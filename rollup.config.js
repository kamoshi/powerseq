/** @type {import("rollup").RollupOptions} */
const options = {
	input: 'dist/esm_es5/src/index.js',
	output: {
    name: 'powerseq',
		file: 'npmpackage/bundles/powerseq.es5.js',
    sourcemap: true,
		format: 'umd',
	},
};

export default options;
