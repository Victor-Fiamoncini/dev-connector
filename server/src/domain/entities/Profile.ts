export namespace Profile {
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

export type Profile = {
	id: string
	company: string
	website: string
	location: string
	status: string
	skills: string[]
	bio: string
	githubusername: string
	experience: Profile.Experience[]
	education: Profile.Education[]
	social: Profile.Social
	user: string
	created_at: Date
	update_at: Date
}
