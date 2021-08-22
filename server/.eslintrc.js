module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
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
	plugins: ['@typescript-eslint', 'eslint-plugin-import-helpers', 'prettier'],
	rules: {
		// Syntax
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		// Typescript
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-namespace': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		// import-helpers
		'import-helpers/order-imports': [
			'warn',
			{
				newlinesBetween: 'always',
				groups: [
					'module',
					'/^@data/',
					'/^@domain/',
					'/^@infra/',
					'/^@main/',
					'/^@presentation/',
					'/^@utils/',
					['parent', 'sibling', 'index'],
				],
				alphabetize: { order: 'asc', ignoreCase: true },
			},
		],
	},
}
