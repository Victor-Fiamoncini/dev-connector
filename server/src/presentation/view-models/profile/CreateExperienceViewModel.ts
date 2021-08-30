import { CreateExperienceUseCase } from '@domain/usecases'

export namespace CreateExperienceViewModel {
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
}

export class CreateExperienceViewModel {
	constructor(
		public readonly id: string,
		public readonly company: string,
		public readonly website: string,
		public readonly location: string,
		public readonly status: string,
		public readonly skills: string[],
		public readonly bio: string,
		public readonly githubusername: string,
		public readonly experience: CreateExperienceViewModel.Experience[],
		public readonly education: CreateExperienceViewModel.Education[],
		public readonly social: CreateExperienceViewModel.Social,
		public readonly user: string
	) {}

	static map(profile: CreateExperienceUseCase.Return) {
		return new CreateExperienceViewModel(
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
			profile.user
		)
	}
}
