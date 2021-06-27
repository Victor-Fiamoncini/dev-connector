import { CreatePostService } from '@data/services'
import {
	MongoCreatePostRepository,
	MongoFindUserByIdRepository,
} from '@infra/repositories'
import { Controller } from '@presentation/contracts'
import { CreatePostController } from '@presentation/controllers'

export class CreatePostControllerFactory {
	static make(): Controller {
		const createPostRepository = new MongoCreatePostRepository()
		const findUserByIdRepository = new MongoFindUserByIdRepository()

		const createPostService = new CreatePostService(
			findUserByIdRepository,
			createPostRepository
		)

		return new CreatePostController(createPostService)
	}
}
