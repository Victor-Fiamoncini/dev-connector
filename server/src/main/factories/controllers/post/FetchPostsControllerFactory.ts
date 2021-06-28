import { FetchPostsService } from '@data/services'
import { MongoFetchPostsRepository } from '@infra/repositories'
import { Controller } from '@presentation/contracts'
import { FetchPostsController } from '@presentation/controllers'

export class FetchPostsControllerFactory {
	static make(): Controller {
		const fetchPostsRepository = new MongoFetchPostsRepository()

		const fetchPostsService = new FetchPostsService(fetchPostsRepository)

		return new FetchPostsController(fetchPostsService)
	}
}
