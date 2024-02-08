import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
	overwrite: true,
	schema: 'https://ksostrovia.haris-instal.pl/graphql',
	generates: {
		'src/generated/graphql.ts': {
			plugins: ['typescript']
		},
		'./graphql.schema.json': {
			plugins: ['introspection']
		}
	}
}

export default config
