import { FindProfileByUserRepository } from '@data/contracts'

import { ProfileMongoDataSource } from '@infra/databases/mongo'

// prettier-ignore
export class MongoFindProfileByUserRepository implements FindProfileByUserRepository {
	async findProfileByUser(user: string) {
		return ProfileMongoDataSource.findOne({ user })
	}
}
