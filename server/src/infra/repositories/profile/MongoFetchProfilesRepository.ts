import { FetchProfilesRepository } from '@data/contracts'
import { FetchProfilesMapper } from '@data/mappers'

import { ProfileMongoDataSource } from '@infra/databases/mongo'

export class MongoFetchProfilesRepository implements FetchProfilesRepository {
	async fetchProfiles() {
		const profiles = await ProfileMongoDataSource.find()
			.select('id status skills experience education social')
			.populate('user', ['name', 'avatar'])
			.sort({ date: -1 })

		return FetchProfilesMapper.fromInfraCollection(profiles as any)
	}
}
