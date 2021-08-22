import { DeletePostService } from '@data/services'

import {
	MongoDeletePostRepository,
	MongoFindPostByIdRepository,
	MongoFindUserByIdRepository,
} from '@infra/repositories'

import { Controller } from '@presentation/contracts'
import { DeletePostController } from '@presentation/controllers'

export class DeletePostControllerFactory {
	static make(): Controller {
		const findUserByIdRepository = new MongoFindUserByIdRepository()
		const findPostByIdRepository = new MongoFindPostByIdRepository()
		const deletePostRepository = new MongoDeletePostRepository()

		const deletePostService = new DeletePostService(
			findUserByIdRepository,
			findPostByIdRepository,
			deletePostRepository
		)

		return new DeletePostController(deletePostService)
	}
}
