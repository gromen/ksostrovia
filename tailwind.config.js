module.exports = {
	mode: 'jit',
	content: ['./public/**/*.html', './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'],
	plugins: ['@tailwindcss/typography'],
	theme: {
		colors: {
			'primary-1': '#059240',
			'primary-2': '#fffb00',
			white: '#fff',
			'gray-800': 'gray'
		},
		borderRadius: {
			DEFAULT: '10px'
		}
	}
}
