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
}

export interface CreateExperienceRepository {
	createExperience(
		data: CreateExperienceRepository.Params
	): Promise<ProfileDataModel.Props | null>
}
