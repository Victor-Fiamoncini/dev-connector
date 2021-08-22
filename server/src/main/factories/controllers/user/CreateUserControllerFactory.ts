import { CreateUserService } from '@data/services'

import {
	BcryptHashGeneratorAdapter,
	GravatarAvatarGeneratorAdapter,
	JwtTokenGeneratorAdapter,
} from '@infra/adapters'
import {
	MongoCreateUserRepository,
	MongoFindUserByEmailRepository,
} from '@infra/repositories'

import env from '@main/config/env'

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

		const tokenGeneratorAdapter = new JwtTokenGeneratorAdapter(
			env.jwt.secret,
			env.jwt.expires
		)

		return new CreateUserController(createUserService, tokenGeneratorAdapter)
	}
}
