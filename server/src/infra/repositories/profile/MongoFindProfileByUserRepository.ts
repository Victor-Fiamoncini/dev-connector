import { FindProfileByUserRepository } from '@data/contracts'

import { ProfileMongoDataSource } from '@infra/databases/mongo'

// prettier-ignore
export class MongoFindProfileByUserRepository implements FindProfileByUserRepository {
	async execute(user: string) {
		try {
			return ProfileMongoDataSource.findOne({ user })
				.select('id status skills experience education social')
				.populate('user', ['name', 'avatar'])
		} catch {
			return null
		}
	}
}
