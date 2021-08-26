import { CreateExperienceRepository } from '@data/contracts'

import { ProfileMongoDataSource } from '@infra/databases/mongo'

// prettier-ignore
export class MongoCreateExperienceRepository implements CreateExperienceRepository {
	async createExperience(data: CreateExperienceRepository.Params) {
		const { id, ...experienceData } = data

		const profileWithNewExperience = await ProfileMongoDataSource.findByIdAndUpdate(
			id,
			{
				$push: {
					experience: experienceData,
				},
			},
			{
				runValidators: true,
			}
		)

		if (!profileWithNewExperience) {
			return null
		}

		return profileWithNewExperience
	}
}
