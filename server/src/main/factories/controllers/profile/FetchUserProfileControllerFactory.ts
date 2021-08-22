import { FetchUserProfileService } from '@data/services'
import { MongoFindProfileByUserRepository } from '@infra/repositories'
import { Controller } from '@presentation/contracts'
import { FetchUserProfileController } from '@presentation/controllers'

export class FetchUserProfileControllerFactory {
	static make(): Controller {
		const findProfileByUserRepository = new MongoFindProfileByUserRepository()

		const fetchUserProfileService = new FetchUserProfileService(
			findProfileByUserRepository
		)

		return new FetchUserProfileController(fetchUserProfileService)
	}
}
