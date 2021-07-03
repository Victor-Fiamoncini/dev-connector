import { FetchPostService } from '@data/services'
import { MongoFindPostByIdRepository } from '@infra/repositories'
import { Controller } from '@presentation/contracts'
import { FetchPostController } from '@presentation/controllers'

export class FetchPostControllerFactory {
	static make(): Controller {
		const findPostByIdRepository = new MongoFindPostByIdRepository()

		const fetchPostService = new FetchPostService(findPostByIdRepository)

		return new FetchPostController(fetchPostService)
	}
}
