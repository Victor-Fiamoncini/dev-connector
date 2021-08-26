import { CreateExperienceRepository } from '@data/contracts'

import { ProfileMongoDataSource } from '@infra/databases/mongo'

// prettier-ignore
export class MongoCreateExperienceRepository implements CreateExperienceRepository {
	async createExperience(data: CreateExperienceRepository.Params) {
		const { id, ...experienceData } = data

		const profile = await ProfileMongoDataSource.findById(id)

		if (!profile) {
			return null
		}

		profile.experience.unshift(experienceData)

		await profile.save()

		return profile
	}
}
