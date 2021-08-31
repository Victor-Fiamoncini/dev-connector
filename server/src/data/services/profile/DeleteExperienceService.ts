import {
	DeleteExperienceRepository,
	FindProfileByUserRepository,
} from '@data/contracts'

import {
	ExperienceDeleteError,
	ExperienceNotFoundError,
	ProfileNotFoundError,
} from '@domain/errors'
import { DeleteExperienceUseCase } from '@domain/usecases'

export class DeleteExperienceService implements DeleteExperienceUseCase {
	constructor(
		private readonly findProfileByUserRepository: FindProfileByUserRepository,
		private readonly deleteExperienceRepository: DeleteExperienceRepository
	) {}

	async run(data: DeleteExperienceUseCase.Params) {
		const profile = await this.findProfileByUserRepository.execute(data.user)

		if (!profile) {
			throw new ProfileNotFoundError()
		}

		const experienceToDelete = profile.experience.find(
			experience => experience.id === data.experience
		)

		if (!experienceToDelete) {
			throw new ExperienceNotFoundError()
		}

		const hasBeenDeleted = await this.deleteExperienceRepository.execute({
			experience: experienceToDelete.id,
			user: data.user,
		})

		if (!hasBeenDeleted) {
			throw new ExperienceDeleteError()
		}
	}
}
