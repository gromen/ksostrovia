import { fetchApi } from '../../lib/api.ts'

export const queryLogo = async () => {
	const data = await fetchApi({
		query: `{
			mediaItems(where:{id: 55}) {
				nodes {
					id
					altText
					sourceUrl
					mediaItemUrl
					mediaDetails {
						height
						width
					}
				}
			}
		}`
	})
	const { mediaItems } = data

	return mediaItems.nodes[0]
}

export const querySiteTitle = async () => {
	const data = await fetchApi({
		query: `{
			generalSettings {
				title
			}
		}`
	})
	const { generalSettings } = data

	return generalSettings?.title
}

export const queryMenuItems = async () => {
	const data = await fetchApi({
		query: `{
			menus {
				nodes {
					menuItems {
						edges {
							node {
								path
								uri
								label
								connectedNode {
									node {
										__typename
										... on Post {
											title
										}
										... on Page {
											title
										}
									}
								}
							}
						}
					}
				}
			}
		}`
	})

	const { menus } = data
	return menus?.nodes[0]?.menuItems?.edges
}

export const queryPost = async (slug: string) => {
	const data = await fetchApi({
		query: `{
			post(id: "${slug}", idType: SLUG) {
				content
				date
				title
				slug
			}
		}`
	})
	const { post } = data
	return post
}

export const queryPosts = async (first: number) => {
	const data = await fetchApi({
		query: `{
			posts(first: ${first}) {
				nodes {
					content
					date
					title
					excerpt
					slug
					featuredImage {
						node {
							mediaItemUrl
							altText
							mediaDetails {
								height
								width
								sizes {
									file
								}
							}
						}
					}
				}
			}
		}`
	})
	const { posts } = data
	return posts?.nodes
}

export const queryPageBy = async (uri: string) => {
	const data = await fetchApi({
		query: `{
			page(idType: URI, id: "${uri}") {
				content
				date
				title
				slug
			}
		}`
	})

	const { page } = data
	return page
}
