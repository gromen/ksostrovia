export const routes = {
	home: '/',
	posts: {
		all: '/posts/all',
		single: (slug: string | undefined | null) => `/post/${slug}`
	}
}
