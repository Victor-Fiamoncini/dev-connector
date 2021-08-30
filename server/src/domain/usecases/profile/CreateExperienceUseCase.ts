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

export interface CreateExperienceUseCase {
	run(
		data: CreateExperienceUseCase.Params
	): Promise<CreateExperienceUseCase.Return>
}
