import { CreateUserService } from '@data/services'
import {
	MongoCreateUserRepository,
	MongoFindUserByEmailRepository,
} from '@infra/repositories'
import { Controller } from '@presentation/contracts'
import { CreateUserController } from '@presentation/controllers'

export class CreateUserControllerFactory {
	static make(): Controller {
		const createUserRepository = new MongoCreateUserRepository()
		const findUserByEmailRepository = new MongoFindUserByEmailRepository()
		const createUserService = new CreateUserService(
			createUserRepository,
			findUserByEmailRepository
		)

		return new CreateUserController(createUserService)
	}
}
