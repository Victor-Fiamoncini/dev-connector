import {
	DeleteExperienceRepository,
	FindProfileByUserRepository,
} from '@data/contracts'

import { ExperienceNotFoundError, ProfileNotFoundError } from '@domain/errors'
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

		const indexToRemoveExperience = profile.experience.findIndex(
			experience => experience.id === data.experience
		)

		if (indexToRemoveExperience === -1) {
			throw new ExperienceNotFoundError()
		}

		await this.deleteExperienceRepository.execute({
			experience: data.experience,
			user: data.user,
		})
	}
}
