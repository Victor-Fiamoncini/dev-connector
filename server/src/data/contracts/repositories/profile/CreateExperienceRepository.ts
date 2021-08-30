import { ProfileDataModel } from '@data/data-models'

export namespace CreateExperienceRepository {
	export type Params = {
		id: string
		title: string
		company: string
		location: string
		from: Date
		to: Date
		current: boolean
		description: string
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

export interface CreateExperienceRepository {
	execute(
		data: CreateExperienceRepository.Params
	): Promise<CreateExperienceRepository.Return | null>
}
