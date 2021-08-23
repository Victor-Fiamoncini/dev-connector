import { FindProfileByUserRepository } from '@data/contracts'

import { ProfileMongoDataSource } from '@infra/databases/mongo'

// prettier-ignore
export class MongoFindProfileByUserRepository implements FindProfileByUserRepository {
	async findProfileByUser(user: string) {
		const profile = await ProfileMongoDataSource.findOne({ user })

		return profile
	}
}
