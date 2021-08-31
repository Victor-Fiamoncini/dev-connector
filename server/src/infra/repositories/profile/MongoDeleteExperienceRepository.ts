import { DeleteExperienceRepository } from '@data/contracts'

import { ProfileMongoDataSource } from '@infra/databases/mongo'

// prettier-ignore
export class MongoDeleteExperienceRepository implements DeleteExperienceRepository {
	async execute(data: DeleteExperienceRepository.Params) {
		try {
			const profile = await ProfileMongoDataSource.findOne({ user: data.user })

			if (!profile) {
				return false
			}

			await profile.experience.id(data.experience).remove()
			await profile.save()

			return true
		} catch {
			return false
		}
	}
}
