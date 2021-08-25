import { ProfileDataModel } from '@data/data-models'

export namespace UpdateProfileRepository {
	export type Params = {
		id: string
		company: string
		website: string
		location: string
		status: string
		skills: string[]
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

export interface UpdateProfileRepository {
	updateProfile(
		data: UpdateProfileRepository.Params
	): Promise<ProfileDataModel | null>
}
