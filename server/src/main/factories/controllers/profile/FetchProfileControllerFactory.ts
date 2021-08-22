import { FetchProfileService } from '@data/services'
import { MongoFindProfileByIdRepository } from '@infra/repositories'
import { Controller } from '@presentation/contracts'
import { FetchProfileController } from '@presentation/controllers'

export class FetchProfileControllerFactory {
	static make(): Controller {
		const findProfileByIdRepository = new MongoFindProfileByIdRepository()

		const fetchProfileService = new FetchProfileService(
			findProfileByIdRepository
		)

		return new FetchProfileController(fetchProfileService)
	}
}
