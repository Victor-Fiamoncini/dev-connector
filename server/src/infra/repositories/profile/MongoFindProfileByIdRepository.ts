import { FindProfileByIdRepository } from '@data/contracts'

import { ProfileMongoDataSource } from '@infra/databases/mongo'

// prettier-ignore
export class MongoFindProfileByIdRepository implements FindProfileByIdRepository {
	async execute(id: string) {
		try {
			return ProfileMongoDataSource.findById(id)
				.select('id status skills experience education social')
				.populate('user', ['name', 'avatar'])
		} catch {
			return null
		}
	}
}
