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

export interface Welcome {
	standings: Standing[]
}

export interface Standing {
	tournament: Tournament
	type: string
	name: string
	descriptions: never[]
	rows: Row[]
	id: number
	updatedAtTimestamp: number
}

export interface Row {
	team: Team
	descriptions: never[]
	position: number
	matches: number
	wins: number
	scoresFor: number
	scoresAgainst: number
	secondaryScoresFor: number
	secondaryScoresAgainst: number
	id: number
	losses: number
	draws: number
	points: number
}

export interface Team {
	name: string
	slug: string
	shortName: string
	sport: Sport
	userCount: number
	nameCode: string
	national: boolean
	type: number
	id: number
	teamColors: TeamColors
	gender?: string
	disabled?: boolean
}

export interface Sport {
	name: Name
	slug: Slug
	id: number
}

export enum Name {
	Football = 'Football'
}

export enum Slug {
	Football = 'football'
}

export interface TeamColors {
	primary: Ary
	secondary: Ary
	text: Text
}

export enum Ary {
	The52B030 = '#52b030'
}

export enum Text {
	Ffffff = '#ffffff'
}

export interface Tournament {
	name: string
	slug: string
	category: Category
	uniqueTournament: UniqueTournament
	priority: number
	id: number
}

export interface Category {
	name: string
	slug: string
	sport: Sport
	id: number
	flag: string
	alpha2: string
}

export interface UniqueTournament {
	name: string
	slug: string
	category: Category
	userCount: number
	hasPerformanceGraphFeature: boolean
	id: number
	displayInverseHomeAwayTeams: boolean
}
