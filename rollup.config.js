export default {
	entry: './index.js',
	targets: [
		{format: 'cjs', dest: 'dist/node.cjs.js'},
		{format: 'es',  dest: 'dist/node.es.js'}
	]
};
