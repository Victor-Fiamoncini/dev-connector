import { Profile } from '@domain/entities'

export namespace ProfileViewModel {
	export type Experience = {
		id?: string
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

export class ProfileViewModel {
	constructor(
		public readonly id: string,
		public readonly company: string,
		public readonly website: string,
		public readonly location: string,
		public readonly status: string,
		public readonly skills: string[],
		public readonly bio: string,
		public readonly githubusername: string,
		public readonly experience: ProfileViewModel.Experience[],
		public readonly education: ProfileViewModel.Education[],
		public readonly social: ProfileViewModel.Social,
		public readonly user: ProfileViewModel.User
	) {}

	static map(profile: Profile) {
		return new ProfileViewModel(
			profile.id,
			profile.company,
			profile.website,
			profile.location,
			profile.status,
			profile.skills,
			profile.bio,
			profile.githubusername,
			profile.experience.map(experience => ({
				id: experience.id,
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
			{
				youtube: profile.social.youtube,
				instagram: profile.social.instagram,
				linkedin: profile.social.linkedin,
				facebook: profile.social.facebook,
				twitter: profile.social.twitter,
			},
			{
				name: profile.user.name,
				avatar: profile.user.avatar,
			}
		)
	}

	static mapColletion(profiles: Profile[]) {
		return profiles.map(profile => {
			return new ProfileViewModel(
				profile.id,
				profile.company,
				profile.website,
				profile.location,
				profile.status,
				profile.skills,
				profile.bio,
				profile.githubusername,
				profile.experience.map(experience => ({
					id: experience.id,
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
				{
					youtube: profile.social.youtube,
					instagram: profile.social.instagram,
					linkedin: profile.social.linkedin,
					facebook: profile.social.facebook,
					twitter: profile.social.twitter,
				},
				{
					name: profile.user.name,
					avatar: profile.user.avatar,
				}
			)
		})
	}
}
