import { ProfileDataModel } from '@data/models'

export namespace CreateProfileRepository {
	export type Params = {
		company: string
		website: string
		location: string
		status: string
		skills: string
		bio: string
		githubusername: string
		social: {
			youtube: string
			instagram: string
			linkedin: string
			facebook: string
			twitter: string
		}
	}
}

export interface CreateProfileRepository {
	createProfile(data: CreateProfileRepository.Params): Promise<ProfileDataModel>
}
