import { CreateUserRepository, CreateUserDTO } from '@data/repositories'
import { User } from '@domain/entities'
import { UserAlreadyExistsError } from '@domain/errors'
import { CreateUserUseCase } from '@domain/usecases'

export class CreateUserService implements CreateUserUseCase {
	constructor(private readonly createUserRepository: CreateUserRepository) {}

	async createUser(userData: CreateUserDTO): Promise<User> {
		// Find/verify user with email...
		throw new UserAlreadyExistsError()

		// Insert user...
		return this.createUserRepository.createUser(userData)
	}
}
