import { FindProfileByIdRepository } from '@data/contracts'
import { ProfileDataModel } from '@data/models'

import { ProfileMongoDataSource } from '@infra/databases/mongo'

// prettier-ignore
export class MongoFindProfileByIdRepository implements FindProfileByIdRepository {
	async findProfileById(id: string): Promise<ProfileDataModel | null> {
		const profile = await ProfileMongoDataSource.findById(id)

		return profile
	}
}