import {
	CreateUserRepository,
	CreateUserDTO,
	FindUserByEmailRepository,
	AvatarGenerator,
} from '@data/contracts'
import { User } from '@domain/entities'
import { UserAlreadyExistsError } from '@domain/errors'
import { CreateUserUseCase } from '@domain/usecases'

export class CreateUserService implements CreateUserUseCase {
	constructor(
		private readonly createUserRepository: CreateUserRepository,
		private readonly findUserByEmailRepository: FindUserByEmailRepository,
		private readonly avatarGenerator: AvatarGenerator
	) {}

	async createUser({ name, email, password }: CreateUserDTO): Promise<User> {
		const userByEmail = await this.findUserByEmailRepository.findUserByEmail(
			email
		)

		if (userByEmail) {
			throw new UserAlreadyExistsError()
		}

		const avatar = await this.avatarGenerator.generateAvatar(email)

		return this.createUserRepository.createUser({
			name,
			email,
			password,
			avatar,
		})
	}
}
