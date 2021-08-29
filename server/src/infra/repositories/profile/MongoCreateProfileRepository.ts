import { CreateProfileRepository } from '@data/contracts'

import { ProfileMongoDataSource } from '@infra/databases/mongo'

export class MongoCreateProfileRepository implements CreateProfileRepository {
	async createProfile(data: CreateProfileRepository.Params) {
		return ProfileMongoDataSource.create(data)
	}
}
