import { CreateOrUpdateProfileService } from '@data/services'

import {
	MongoCreateProfileRepository,
	MongoFindProfileByUserRepository,
	MongoUpdateProfileRepository,
} from '@infra/repositories'

import { Controller } from '@presentation/contracts'
import { CreateOrUpdateProfileController } from '@presentation/controllers'

export class CreateOrUpdateProfileControllerFactory {
	static make(): Controller {
		const findProfileByUserRepository = new MongoFindProfileByUserRepository()
		const createProfileRepository = new MongoCreateProfileRepository()
		const updateProfileRepository = new MongoUpdateProfileRepository()

		const createOrUpdateProfileService = new CreateOrUpdateProfileService(
			findProfileByUserRepository,
			updateProfileRepository,
			createProfileRepository
		)

		return new CreateOrUpdateProfileController(createOrUpdateProfileService)
	}
}
