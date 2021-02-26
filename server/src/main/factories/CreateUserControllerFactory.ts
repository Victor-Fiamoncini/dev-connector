import { CreateUserService } from '@data/services'
import {
	BcryptHashGeneratorAdapter,
	GravatarAvatarGeneratorAdapter,
} from '@infra/adapters'
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
		const avatarGeneratorAdapter = new GravatarAvatarGeneratorAdapter()
		const hashGeneratorAdapter = new BcryptHashGeneratorAdapter()

		const createUserService = new CreateUserService(
			createUserRepository,
			findUserByEmailRepository,
			avatarGeneratorAdapter,
			hashGeneratorAdapter
		)

		return new CreateUserController(createUserService)
	}
}
