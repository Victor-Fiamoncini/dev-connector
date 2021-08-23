import { FindProfileByIdRepository } from '@data/contracts'

import { ProfileMongoDataSource } from '@infra/databases/mongo'

// prettier-ignore
export class MongoFindProfileByIdRepository implements FindProfileByIdRepository {
	async findProfileById(id: string) {
		const profile = await ProfileMongoDataSource.findById(id)

		return profile
	}
}
