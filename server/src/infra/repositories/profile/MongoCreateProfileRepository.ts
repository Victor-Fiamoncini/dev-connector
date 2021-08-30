import { CreateProfileRepository } from '@data/contracts'

import { ProfileMongoDataSource } from '@infra/databases/mongo'

export class MongoCreateProfileRepository implements CreateProfileRepository {
	async execute(data: CreateProfileRepository.Params) {
		try {
			return ProfileMongoDataSource.create(data)
		} catch {
			return null
		}
	}
}
