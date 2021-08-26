import { CreateExperienceService } from '@data/services'

import {
	MongoCreateExperienceRepository,
	MongoFindProfileByUserRepository,
} from '@infra/repositories'

import { Controller } from '@presentation/contracts'
import { CreateExperienceController } from '@presentation/controllers'

export class CreateExperienceControllerFactory {
	static make(): Controller {
		const findProfileByUserRepository = new MongoFindProfileByUserRepository()
		const createExperienceRepository = new MongoCreateExperienceRepository()

		const createExperienceService = new CreateExperienceService(
			findProfileByUserRepository,
			createExperienceRepository
		)

		return new CreateExperienceController(createExperienceService)
	}
}
