import { Profile } from '@domain/entities'

export namespace CreateOrUpdateProfileUseCase {
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
		user: string
	}
}

export interface CreateOrUpdateProfileUseCase {
	createOrUpdateProfile(
		data: CreateOrUpdateProfileUseCase.Params
	): Promise<Profile>
}
