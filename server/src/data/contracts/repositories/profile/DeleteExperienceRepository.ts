export namespace DeleteExperienceRepository {
	export type Params = {
		id: string
		user: string
	}
}

export interface DeleteExperienceRepository {
	deleteExperience(data: DeleteExperienceRepository.Params): Promise<void>
}
