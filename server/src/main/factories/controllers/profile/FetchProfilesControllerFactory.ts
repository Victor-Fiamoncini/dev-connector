import { FetchProfilesService } from '@data/services'
import { MongoFetchProfilesRepository } from '@infra/repositories'
import { Controller } from '@presentation/contracts'
import { FetchProfilesController } from '@presentation/controllers'

export class FetchProfilesControllerFactory {
	static make(): Controller {
		const fetchProfilesRepository = new MongoFetchProfilesRepository()

		const fetchProfilesService = new FetchProfilesService(
			fetchProfilesRepository
		)

		return new FetchProfilesController(fetchProfilesService)
	}
}
