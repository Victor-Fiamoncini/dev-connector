import { CreateUserRepository, CreateUserDTO } from '@data/repositories'
import { User } from '@domain/entities'
import { CreateUserUseCase } from '@domain/usecases'

export class CreateUserService implements CreateUserUseCase {
	constructor(private readonly createUserRepository: CreateUserRepository) {}

	async createUser(userData: CreateUserDTO): Promise<User> {
		// Find/verify user with email...

		// Insert user...
		return this.createUserRepository.createUser(userData)
	}
}
