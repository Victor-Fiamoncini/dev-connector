import {
	CreateUserRepository,
	CreateUserDTO,
	FindUserByEmailRepository,
	AvatarGeneratorAdapter,
	HashGeneratorAdapter,
} from '@data/contracts'
import { User } from '@domain/entities'
import { UserAlreadyExistsError } from '@domain/errors'
import { CreateUserUseCase } from '@domain/usecases'

export class CreateUserService implements CreateUserUseCase {
	constructor(
		private readonly createUserRepository: CreateUserRepository,
		private readonly findUserByEmailRepository: FindUserByEmailRepository,
		private readonly avatarGeneratorAdapter: AvatarGeneratorAdapter,
		private readonly hashGeneratorAdapter: HashGeneratorAdapter
	) {}

	async createUser({ name, email, password }: CreateUserDTO): Promise<User> {
		const userByEmail = await this.findUserByEmailRepository.findUserByEmail(
			email
		)

		if (userByEmail) {
			throw new UserAlreadyExistsError()
		}

		const avatar = await this.avatarGeneratorAdapter.generateAvatar(email)

		const hashedPassword = await this.hashGeneratorAdapter.generateHash(
			password
		)

		const createdUser = await this.createUserRepository.createUser({
			name,
			email,
			password: hashedPassword,
			avatar,
		})

		return createdUser
	}
}
