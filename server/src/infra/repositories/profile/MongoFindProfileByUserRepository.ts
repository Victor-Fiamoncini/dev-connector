import { FindProfileByUserRepository } from '@data/contracts'
import { ProfileDataModel } from '@data/models'

import { ProfileMongoDataSource } from '@infra/databases/mongo'

// prettier-ignore
export class MongoFindProfileByUserRepository implements FindProfileByUserRepository {
	async findProfileByUser(user: string): Promise<ProfileDataModel | null> {
		const profile = await ProfileMongoDataSource.findOne({ user })

		return profile
	}
}
