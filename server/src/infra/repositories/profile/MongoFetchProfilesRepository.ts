import { FetchProfilesRepository } from '@data/contracts'
import { ProfileDataModel } from '@data/models'

import { ProfileMongoDataSource } from '@infra/databases/mongo'

export class MongoFetchProfilesRepository implements FetchProfilesRepository {
	async fetchProfiles(): Promise<ProfileDataModel[]> {
		const profiles = await ProfileMongoDataSource.find()
			.populate('user', ['name', 'avatar'])
			.sort({ date: -1 })

		return profiles
	}
}
