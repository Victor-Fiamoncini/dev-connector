import { CreateUserRepository } from '@data/contracts'

import { UserMongoDataSource } from '@infra/databases/mongo'

export class MongoCreateUserRepository implements CreateUserRepository {
	async createUser(data: CreateUserRepository.Params) {
		const createdUser = await UserMongoDataSource.create(data)

		return createdUser
	}
}
