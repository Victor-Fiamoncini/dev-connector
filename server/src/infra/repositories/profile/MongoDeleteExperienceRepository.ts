import { DeleteExperienceRepository } from '@data/contracts'

import { ProfileMongoDataSource } from '@infra/databases/mongo'

// prettier-ignore
export class MongoDeleteExperienceRepository implements DeleteExperienceRepository {
	async deleteExperience(data: DeleteExperienceRepository.Params) {
		await ProfileMongoDataSource.findOneAndUpdate(
			{ user: data.user },
			{ $pull: { experience: { id: data.id } } },
			{ new: true }
		)
	}
}
