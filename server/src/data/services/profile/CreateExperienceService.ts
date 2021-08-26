import {
	CreateExperienceRepository,
	FindProfileByUserRepository,
} from '@data/contracts'
import { ProfileDataModel } from '@data/data-models'

import { ExperienceCreateError, ProfileNotFoundError } from '@domain/errors'
import { CreateExperienceUseCase } from '@domain/usecases'

export class CreateExperienceService implements CreateExperienceUseCase {
	constructor(
		private readonly findProfileByUserRepository: FindProfileByUserRepository,
		private readonly createExperienceRepository: CreateExperienceRepository
	) {}

	async createExperience(data: CreateExperienceUseCase.Params) {
		const profile = await this.findProfileByUserRepository.findProfileByUser(
			data.user
		)

		if (!profile) {
			throw new ProfileNotFoundError()
		}

		const profileEntity = ProfileDataModel.fromDatabase(profile).toDomain()

		const profileWithNewExperience = await this.createExperienceRepository.createExperience(
			{
				...data,
				id: profileEntity.id,
			}
		)

		if (!profileWithNewExperience) {
			throw new ExperienceCreateError()
		}

		return ProfileDataModel.fromDatabase(profileWithNewExperience).toDomain()
	}
}
