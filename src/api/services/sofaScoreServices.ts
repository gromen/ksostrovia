import { fetchFromSofaScore } from '../sofaScoreApiBase.ts'
//https://sofascore.p.rapidapi.com/tournaments/get-standings?tournamentId=20137&seasonId=52791&type=total
export async function getLeagueTable(tournamentId: string, seasonId: string, total = 'total') {
	return await fetchFromSofaScore(
		`/tournaments/get-standings?tournamentId=${tournamentId}&seasonId=${seasonId}&type=${total}`
	)
}
