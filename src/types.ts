import type { Post } from './generated/graphql.ts'

export type PostProp = Post & {
	featuredImage: {
		node: {
			mediaDetails: {
				height: string
				width: string
			}
			mediaItemUrl: string
			altText: string
		}
	}
}
