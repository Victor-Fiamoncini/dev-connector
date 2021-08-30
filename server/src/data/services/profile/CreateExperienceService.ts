import {
	CreateExperienceRepository,
	FindProfileByUserRepository,
} from '@data/contracts'

import { ExperienceCreateError, ProfileNotFoundError } from '@domain/errors'
import { CreateExperienceUseCase } from '@domain/usecases'

export class CreateExperienceService implements CreateExperienceUseCase {
	constructor(
		private readonly findProfileByUserRepository: FindProfileByUserRepository,
		private readonly createExperienceRepository: CreateExperienceRepository
	) {}

	async run(data: CreateExperienceUseCase.Params) {
		const profile = await this.findProfileByUserRepository.execute(data.user)

		if (!profile) {
			throw new ProfileNotFoundError()
		}

		const profileWithNewExperience = await this.createExperienceRepository.execute(
			{
				...data,
				id: profile.id,
			}
		)

		if (!profileWithNewExperience) {
			throw new ExperienceCreateError()
		}

		return profileWithNewExperience
	}
}
