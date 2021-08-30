export namespace DeleteExperienceUseCase {
	export type Params = {
		experience: string
		user: string
	}
}

export interface DeleteExperienceUseCase {
	run(data: DeleteExperienceUseCase.Params): Promise<void>
}
