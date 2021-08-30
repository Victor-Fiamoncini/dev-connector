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

	export type Return = {
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
	}
}

export interface CreateOrUpdateProfileUseCase {
	run(
		data: CreateOrUpdateProfileUseCase.Params
	): Promise<CreateOrUpdateProfileUseCase.Return>
}
