module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	globals: {
		module: true,
		exports: true,
		require: true,
		process: true,
		__dirname: true,
	},
	plugins: ['@typescript-eslint'],
	rules: {
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/ban-types': 'off',
	},
}
