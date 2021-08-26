export namespace Profile {
	export type Experience = {
		id: string
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

export class Profile {
	constructor(
		public id: string,
		public company: string,
		public website: string,
		public location: string,
		public status: string,
		public skills: string[],
		public bio: string,
		public githubusername: string,
		public experience: Profile.Experience[],
		public education: Profile.Education[],
		public social: Profile.Social,
		public user: string,
		public created_at: Date,
		public update_at: Date
	) {}
}
