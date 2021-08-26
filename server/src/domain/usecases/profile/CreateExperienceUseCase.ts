import { Profile } from '@domain/entities'

export namespace CreateExperienceUseCase {
	export type Params = {
		title: string
		company: string
		location: string
		from: Date
		to: Date
		current: boolean
		description: string
		user: string
	}
}

export interface CreateExperienceUseCase {
	createExperience(data: CreateExperienceUseCase.Params): Promise<Profile>
}
