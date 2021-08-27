import { Profile } from '@domain/entities'

export namespace FetchProfilesUseCase {
	export type Return = {
		id: string
		company: string
		website: string
		location: string
		status: string
		skills: string[]
		bio: string
		githubusername: string
		experience: Profile.Experience
		education: Profile.Education
		social: Profile.Social
		user: {
			name: string
			avatar: string
		}
	}
}

export interface FetchProfilesUseCase {
	fetchProfiles(): Promise<FetchProfilesUseCase.Return[]>
}
