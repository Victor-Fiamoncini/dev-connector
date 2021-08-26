import { DeleteExperienceService } from '@data/services'

import {
	MongoDeleteExperienceRepository,
	MongoFindProfileByUserRepository,
} from '@infra/repositories'

import { Controller } from '@presentation/contracts'
import { DeleteExperienceController } from '@presentation/controllers'

export class DeleteExperienceControllerFactory {
	static make(): Controller {
		const findProfileByUserRepository = new MongoFindProfileByUserRepository()
		const deleteExperienceRepository = new MongoDeleteExperienceRepository()

		const deleteExperienceService = new DeleteExperienceService(
			findProfileByUserRepository,
			deleteExperienceRepository
		)

		return new DeleteExperienceController(deleteExperienceService)
	}
}
