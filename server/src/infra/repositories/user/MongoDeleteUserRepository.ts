import { DeleteUserRepository } from '@data/contracts'

import { UserMongoDataSource } from '@infra/databases/mongo'

export class MongoDeleteUserRepository implements DeleteUserRepository {
	async deleterUser(user: string): Promise<void> {
		await UserMongoDataSource.findOneAndRemove({ _id: user })
	}
}
