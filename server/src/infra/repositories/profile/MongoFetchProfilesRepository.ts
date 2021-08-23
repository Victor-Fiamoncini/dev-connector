import { FetchProfilesRepository } from '@data/contracts'

import { ProfileMongoDataSource } from '@infra/databases/mongo'

export class MongoFetchProfilesRepository implements FetchProfilesRepository {
	async fetchProfiles() {
		const profiles = await ProfileMongoDataSource.find()
			.populate('user', ['name', 'avatar'])
			.sort({ date: -1 })

		return profiles
	}
}
