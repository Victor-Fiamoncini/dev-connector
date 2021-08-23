import { CreateProfileRepository } from '@data/contracts'

import { ProfileMongoDataSource } from '@infra/databases/mongo'

export class MongoCreateProfileRepository implements CreateProfileRepository {
	async createProfile(data: CreateProfileRepository.Params) {
		const createdProfile = await ProfileMongoDataSource.create(data)

		return createdProfile
	}
}
