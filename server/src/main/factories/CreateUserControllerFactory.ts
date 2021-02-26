import { CreateUserService } from '@data/services'
import { GravatarAvatarGeneratorAdapter } from '@infra/adapters'
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
		const avatarGenerator = new GravatarAvatarGeneratorAdapter()

		const createUserService = new CreateUserService(
			createUserRepository,
			findUserByEmailRepository,
			avatarGenerator
		)

		return new CreateUserController(createUserService)
	}
}
