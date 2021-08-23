import {
	CreateUserRepository,
	FindUserByEmailRepository,
	AvatarGeneratorAdapter,
	HashGeneratorAdapter,
} from '@data/contracts'
import { UserDataModel } from '@data/models'

import { UserAlreadyExistsError } from '@domain/errors'
import { CreateUserUseCase } from '@domain/usecases'

export class CreateUserService implements CreateUserUseCase {
	constructor(
		private readonly createUserRepository: CreateUserRepository,
		private readonly findUserByEmailRepository: FindUserByEmailRepository,
		private readonly avatarGeneratorAdapter: AvatarGeneratorAdapter,
		private readonly hashGeneratorAdapter: HashGeneratorAdapter
	) {}

	async createUser(data: CreateUserUseCase.Params) {
		const userByEmail = await this.findUserByEmailRepository.findUserByEmail(
			data.email
		)

		if (userByEmail) {
			throw new UserAlreadyExistsError()
		}

		const avatar = await this.avatarGeneratorAdapter.adapt(data.email)

		const hashedPassword = await this.hashGeneratorAdapter.adapt(data.password)

		const createdUser = await this.createUserRepository.createUser({
			name: data.name,
			email: data.email,
			password: hashedPassword,
			avatar,
		})

		return UserDataModel.fromDatabase(createdUser).toDomain()
	}
}
