import { CreateUserRepository } from '@data/contracts'
import { UserDataModel } from '@data/models'
import { UserMongoDataSource } from '@infra/databases/mongo'

export class MongoCreateUserRepository implements CreateUserRepository {
	async createUser(data: CreateUserRepository.Params): Promise<UserDataModel> {
		const createdUser = await UserMongoDataSource.create(data)

		return {
			id: createdUser.id,
			name: createdUser.name,
			email: createdUser.email,
			password: createdUser.password,
			avatar: createdUser.avatar,
			created_at: createdUser.createdAt,
			update_at: createdUser.updatedAt,
		}
	}
}
