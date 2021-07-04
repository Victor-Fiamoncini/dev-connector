import { Profile } from '@domain/entities'

export namespace FetchProfilesModel {
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

export class FetchProfilesModel {
	id: string
	company: string
	website: string
	location: string
	status: string
	skills: string[]
	bio: string
	githubusername: string
	experience: FetchProfilesModel.Experience[]
	education: FetchProfilesModel.Education[]
	social: Profile.Social
	user: string

	static mapColletion(profiles: Profile[]): FetchProfilesModel[] {
		return profiles.map(profile => ({
			id: profile.id,
			company: profile.company,
			website: profile.website,
			location: profile.location,
			status: profile.status,
			skills: profile.skills,
			bio: profile.bio,
			githubusername: profile.githubusername,
			social: {
				youtube: profile.social.youtube,
				instagram: profile.social.instagram,
				linkedin: profile.social.linkedin,
				facebook: profile.social.facebook,
				twitter: profile.social.twitter,
			},
			education: profile.education,
			experience: profile.experience,
			user: profile.user,
		}))
	}
}
