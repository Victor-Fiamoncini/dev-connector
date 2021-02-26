import {
	CreateUserRepository,
	CreateUserDTO,
	FindUserByEmailRepository,
	AvatarGenerator,
	HashGenerator,
} from '@data/contracts'
import { User } from '@domain/entities'
import { UserAlreadyExistsError } from '@domain/errors'
import { CreateUserUseCase } from '@domain/usecases'

export class CreateUserService implements CreateUserUseCase {
	constructor(
		private readonly createUserRepository: CreateUserRepository,
		private readonly findUserByEmailRepository: FindUserByEmailRepository,
		private readonly avatarGenerator: AvatarGenerator,
		private readonly hashGenerator: HashGenerator
	) {}

	async createUser({ name, email, password }: CreateUserDTO): Promise<User> {
		const userByEmail = await this.findUserByEmailRepository.findUserByEmail(
			email
		)

		if (userByEmail) {
			throw new UserAlreadyExistsError()
		}

		const avatar = await this.avatarGenerator.generateAvatar(email)

		const hashedPassword = await this.hashGenerator.hash(password)

		return this.createUserRepository.createUser({
			name,
			email,
			password: hashedPassword,
			avatar,
		})
	}
}
