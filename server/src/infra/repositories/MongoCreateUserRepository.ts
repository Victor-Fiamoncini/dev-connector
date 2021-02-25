import { CreateUserDTO, CreateUserRepository } from '@data/contracts'
import { UserModel } from '@data/models'

export class MongoCreateUserRepository implements CreateUserRepository {
	async createUser(userData: CreateUserDTO): Promise<UserModel> {
		throw new Error('Method not implemented.')
	}
}
