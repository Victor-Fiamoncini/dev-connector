import { Profile } from '@domain/entities'

export namespace ProfileViewModel {
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

export class ProfileViewModel {
	constructor(
		public id: string,
		public company: string,
		public website: string,
		public location: string,
		public status: string,
		public skills: string[],
		public bio: string,
		public githubusername: string,
		public experience: ProfileViewModel.Experience[],
		public education: ProfileViewModel.Education[],
		public social: ProfileViewModel.Social,
		public user: string
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
			profile.experience,
			profile.education,
			{
				youtube: profile.social.youtube,
				instagram: profile.social.instagram,
				linkedin: profile.social.linkedin,
				facebook: profile.social.facebook,
				twitter: profile.social.twitter,
			},
			profile.user
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
				profile.experience,
				profile.education,
				{
					youtube: profile.social.youtube,
					instagram: profile.social.instagram,
					linkedin: profile.social.linkedin,
					facebook: profile.social.facebook,
					twitter: profile.social.twitter,
				},
				profile.user
			)
		})
	}
}
