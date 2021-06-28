import { FetchPostService } from '@data/services'
import { MongoFetchPostRepository } from '@infra/repositories'
import { Controller } from '@presentation/contracts'
import { FetchPostController } from '@presentation/controllers'

export class FetchPostControllerFactory {
	static make(): Controller {
		const fetchPostRepository = new MongoFetchPostRepository()

		const fetchPostService = new FetchPostService(fetchPostRepository)

		return new FetchPostController(fetchPostService)
	}
}
