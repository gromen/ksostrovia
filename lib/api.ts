import dotenv from 'dotenv'

dotenv.config()

interface FetchApiParams {
	query: string
	variables?: object
}

export async function fetchApi({ query, variables }: FetchApiParams) {
	const headers = { 'Content-Type': 'application/json' }
	const response = await fetch(import.meta.env.WP_URL, {
		method: 'POST',
		headers,
		body: JSON.stringify({ query, variables })
	})
	console.log(response.ok)
	if (!response.ok) {
		console.error(response)
		throw new Error('Failed to fetch API')
	}
	const { data } = await response.json()
	console.log(data)
	return data
}
