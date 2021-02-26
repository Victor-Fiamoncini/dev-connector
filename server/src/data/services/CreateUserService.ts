import {
	CreateUserRepository,
	CreateUserDTO,
	FindUserByEmailRepository,
} from '@data/contracts'
import { User } from '@domain/entities'
import { UserAlreadyExistsError } from '@domain/errors'
import { CreateUserUseCase } from '@domain/usecases'

export class CreateUserService implements CreateUserUseCase {
	constructor(
		private readonly createUserRepository: CreateUserRepository,
		private readonly findUserByEmailRepository: FindUserByEmailRepository
	) {}

	async createUser(userData: CreateUserDTO): Promise<User> {
		const userByEmail = await this.findUserByEmailRepository.findUserByEmail(
			userData.email
		)

		if (userByEmail) {
			throw new UserAlreadyExistsError()
		}

		return this.createUserRepository.createUser(userData)
	}
}
