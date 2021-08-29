import { FetchProfilesUseCase } from '@domain/usecases'

export namespace FetchProfilesViewModel {
	export type Experience = {
		title: string
		company: string
		location: string
		from: Date
		to: Date
		current: boolean
		description: string
	}

	export type Education = {
		school: string
		degree: string
		fieldofstudy: string
		from: Date
		to: Date
		current: boolean
		description: string
	}

	export type Social = {
		youtube: string
		instagram: string
		linkedin: string
		facebook: string
		twitter: string
	}

	export type User = {
		name: string
		avatar: string
	}
}

export class FetchProfilesViewModel {
	id: string
	company: string
	website: string
	location: string
	status: string
	skills: string[]
	bio: string
	githubusername: string
	experience: FetchProfilesViewModel.Experience[]
	education: FetchProfilesViewModel.Education[]
	social: FetchProfilesViewModel.Social
	user: FetchProfilesViewModel.User

	static mapColletion(profiles: FetchProfilesUseCase.Return[]) {
		return profiles.map(profile => ({
			id: profile.id,
			company: profile.company,
			website: profile.website,
			location: profile.location,
			status: profile.status,
			skills: profile.skills,
			bio: profile.bio,
			githubusername: profile.githubusername,
			social: profile.social,
			education: profile.education,
			experience: profile.experience,
			user: {
				name: profile.user.name,
				avatar: profile.user.avatar,
			},
		}))
	}
}
