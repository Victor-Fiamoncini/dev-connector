import { CreateUserDTO, CreateUserRepository } from '@data/contracts'
import { UserModel } from '@data/models'
import { UserMongoDataSource } from '@infra/data-sources'

export class MongoCreateUserRepository implements CreateUserRepository {
	async createUser(userData: CreateUserDTO): Promise<UserModel> {
		const createdUser = await UserMongoDataSource.create(userData)

		const { email, name, password, avatar } = createdUser

		return {
			name,
			email,
			password,
			avatar,
		}
	}
}
