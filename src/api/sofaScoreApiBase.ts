const BASE_URL = 'https://sofascore.p.rapidapi.com'
// 'https://sofascore.p.rapidapi.com/tournaments/get-standings?tournamentId=20137&seasonId=52791&type=total'

export async function fetchFromSofaScore(url: string, options = {}) {
	const baseUrl = `${BASE_URL}${url}`
	console.log({ baseUrl })
	const defaultOptions = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': import.meta.env.SOFASCORE_TOKEN,
			'X-RapidAPI-Host': 'sofascore.p.rapidapi.com'
		}
	}

	const finalOptions = { ...defaultOptions, ...options }

	try {
		const response = await fetch(baseUrl, finalOptions)
		return await response.json()
	} catch (error) {
		console.error(error)
		return error
	}
}
