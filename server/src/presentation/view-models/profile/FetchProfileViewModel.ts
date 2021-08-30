import { FetchProfileUseCase } from '@domain/usecases'

export namespace FetchProfileViewModel {
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

export class FetchProfileViewModel {
	constructor(
		public readonly id: string,
		public readonly company: string,
		public readonly website: string,
		public readonly location: string,
		public readonly status: string,
		public readonly skills: string[],
		public readonly bio: string,
		public readonly githubusername: string,
		public readonly experience: FetchProfileViewModel.Experience[],
		public readonly education: FetchProfileViewModel.Education[],
		public readonly social: FetchProfileViewModel.Social,
		public readonly user: FetchProfileViewModel.User
	) {}

	static map(profile: FetchProfileUseCase.Return) {
		return new FetchProfileViewModel(
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
	}
}
