export const routes = {
	home: '/',
	posts: {
		all: '/posts/all',
		single: (slug: string) => `/post/${slug}`
	}
}
