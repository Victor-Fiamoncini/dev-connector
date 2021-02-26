import { CreateUserService } from '@data/services'
import { MongoCreateUserRepository } from '@infra/repositories'
import { Controller } from '@presentation/contracts'
import { CreateUserController } from '@presentation/controllers'

export class CreateUserControllerFactory {
	static make(): Controller {
		const createUserRepository = new MongoCreateUserRepository()
		const createUserService = new CreateUserService(createUserRepository)

		return new CreateUserController(createUserService)
	}
}
