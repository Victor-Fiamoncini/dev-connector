import { DeleteProfileRepository } from '@data/contracts'

import { ProfileMongoDataSource } from '@infra/databases/mongo'

export class MongoDeleteProfileRepository implements DeleteProfileRepository {
	async deleteProfile(user: string) {
		await ProfileMongoDataSource.findOneAndDelete({ user })
	}
}
