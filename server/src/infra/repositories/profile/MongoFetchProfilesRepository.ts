import { FetchProfilesRepository } from '@data/contracts'

import { ProfileMongoDataSource } from '@infra/databases/mongo'

export class MongoFetchProfilesRepository implements FetchProfilesRepository {
	async execute() {
		const profiles = await ProfileMongoDataSource.find()
			.select('id status skills experience education social')
			.populate('user', ['name', 'avatar'])
			.sort({ date: -1 })

		return profiles
	}
}
