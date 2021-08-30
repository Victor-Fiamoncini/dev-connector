export namespace DeleteExperienceRepository {
	export type Params = {
		experience: string
		user: string
	}
}

export interface DeleteExperienceRepository {
	execute(data: DeleteExperienceRepository.Params): Promise<void>
}
