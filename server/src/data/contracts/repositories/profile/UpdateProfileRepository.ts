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

	export type Return = {
		id: string
		company: string
		website: string
		location: string
		status: string
		skills: string[]
		bio: string
		githubusername: string
		experience: ProfileDataModel.Props['experience']
		education: ProfileDataModel.Props['education']
		social: ProfileDataModel.Props['social']
		user: string
	}
}

export interface UpdateProfileRepository {
	execute(
		data: UpdateProfileRepository.Params
	): Promise<UpdateProfileRepository.Return | null>
}
