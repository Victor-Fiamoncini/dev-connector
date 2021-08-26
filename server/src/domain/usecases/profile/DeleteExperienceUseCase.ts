export namespace DeleteExperienceUseCase {
	export type Params = {
		experience: string
		user: string
	}
}

export interface DeleteExperienceUseCase {
	deleteExperience(data: DeleteExperienceUseCase.Params): Promise<void>
}
