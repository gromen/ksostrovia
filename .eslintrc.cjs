module.exports = {
	// ...
	extends: [
		// ...
		'eslint:recommended',
		"plugin:astro/recommended",
		'plugin:astro/jsx-a11y-strict'
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	// ...
	overrides: [
		{
			// Define the configuration for `.astro` file.
			files: ["*.astro"],
			// Allows Astro components to be parsed.
			parser: "astro-eslint-parser",
			// Parse the script in `.astro` as TypeScript by adding the following configuration.
			// It's the setting you need when using TypeScript.
			parserOptions: {
				parser: "@typescript-eslint/parser",
				extraFileExtensions: [".astro"],
			},
			rules: {
				// override/add rules settings here, such as:
				// "astro/no-set-html-directive": "error",
				"astro/prefer-class-list-directive": "error"
			},
		},
		{
			files: ['*.ts'],
			parser: '@typescript-eslint/parser',
			extends: ['plugin:@typescript-eslint/recommended'],
			rules: {
				'@typescript-eslint/no-unused-vars': [
					'error',
					{ argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' },
				],
				'@typescript-eslint/no-non-null-assertion': 'off',
			},
		},
		// ...
	],
}
