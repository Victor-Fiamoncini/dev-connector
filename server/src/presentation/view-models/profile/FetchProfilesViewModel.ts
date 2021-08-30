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
	constructor(
		public readonly id: string,
		public readonly company: string,
		public readonly website: string,
		public readonly location: string,
		public readonly status: string,
		public readonly skills: string[],
		public readonly bio: string,
		public readonly githubusername: string,
		public readonly experience: FetchProfilesViewModel.Experience[],
		public readonly education: FetchProfilesViewModel.Education[],
		public readonly social: FetchProfilesViewModel.Social,
		public readonly user: FetchProfilesViewModel.User
	) {}

	static mapColletion(profiles: FetchProfilesUseCase.Return[]) {
		return profiles.map(profile => {
			return new FetchProfilesViewModel(
				profile.id,
				profile.company,
				profile.website,
				profile.location,
				profile.status,
				profile.skills,
				profile.bio,
				profile.githubusername,
				profile.experience,
				profile.education,
				profile.social,
				{
					name: profile.user.name,
					avatar: profile.user.avatar,
				}
			)
		})
	}
}
