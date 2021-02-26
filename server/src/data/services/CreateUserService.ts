import {
	CreateUserRepository,
	CreateUserDTO,
	FindUserByEmailRepository,
	AvatarGenerator,
	HashGenerator,
	TokenGenerator,
} from '@data/contracts'
import { User } from '@domain/entities'
import { UserAlreadyExistsError } from '@domain/errors'
import { CreateUserUseCase } from '@domain/usecases'

export class CreateUserService implements CreateUserUseCase {
	constructor(
		private readonly createUserRepository: CreateUserRepository,
		private readonly findUserByEmailRepository: FindUserByEmailRepository,
		private readonly avatarGenerator: AvatarGenerator,
		private readonly hashGenerator: HashGenerator,
		private readonly tokenGenerator: TokenGenerator
	) {}

	async createUser({ name, email, password }: CreateUserDTO): Promise<User> {
		const userByEmail = await this.findUserByEmailRepository.findUserByEmail(
			email
		)

		if (userByEmail) {
			throw new UserAlreadyExistsError()
		}

		const avatar = await this.avatarGenerator.generateAvatar(email)

		const hashedPassword = await this.hashGenerator.generateHash(password)

		const createdUser = await this.createUserRepository.createUser({
			name,
			email,
			password: hashedPassword,
			avatar,
		})

		const token = await this.tokenGenerator.generateToken({
			id: createdUser.email,
		})

		return createdUser
	}
}
