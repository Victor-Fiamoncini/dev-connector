import { CreateUserDTO, CreateUserRepository } from '@data/contracts'
import { UserDataModel } from '@data/models'
import { UserMongoDataSource } from '@infra/databases/mongo'

export class MongoCreateUserRepository implements CreateUserRepository {
	async createUser(userData: CreateUserDTO): Promise<UserDataModel> {
		const createdUser = await UserMongoDataSource.create(userData)

		const { email, name, password, avatar, createdAt, updatedAt } = createdUser

		return {
			name,
			email,
			password,
			avatar,
			created_at: createdAt,
			update_at: updatedAt,
		}
	}
}
