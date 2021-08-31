import { CreateOrUpdateProfileUseCase } from '@domain/usecases'

export namespace CreateOrUpdateProfileViewModel {
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

export class CreateOrUpdateProfileViewModel {
	constructor(
		public readonly id: string,
		public readonly company: string,
		public readonly website: string,
		public readonly location: string,
		public readonly status: string,
		public readonly skills: string[],
		public readonly bio: string,
		public readonly githubusername: string,
		public readonly experience: CreateOrUpdateProfileViewModel.Experience[],
		public readonly education: CreateOrUpdateProfileViewModel.Education[],
		public readonly social: CreateOrUpdateProfileViewModel.Social,
		public readonly user: string
	) {}

	static map(profile: CreateOrUpdateProfileUseCase.Return) {
		return new CreateOrUpdateProfileViewModel(
			profile.id,
			profile.company,
			profile.website,
			profile.location,
			profile.status,
			profile.skills,
			profile.bio,
			profile.githubusername,
			profile.experience.map(experience => ({
				title: experience.title,
				company: experience.company,
				location: experience.location,
				from: experience.from,
				to: experience.to,
				current: experience.current,
				description: experience.description,
			})),
			profile.education.map(education => ({
				school: education.school,
				degree: education.degree,
				fieldofstudy: education.fieldofstudy,
				from: education.from,
				to: education.to,
				current: education.current,
				description: education.description,
			})),
			profile.social,
			profile.user
		)
	}
}
