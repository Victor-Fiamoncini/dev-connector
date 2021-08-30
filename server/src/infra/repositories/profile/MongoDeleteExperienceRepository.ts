import { DeleteExperienceRepository } from '@data/contracts'

import { ProfileMongoDataSource } from '@infra/databases/mongo'

// prettier-ignore
export class MongoDeleteExperienceRepository implements DeleteExperienceRepository {
	async execute(data: DeleteExperienceRepository.Params) {
		const query: any = {
			$pull: {
				experience: {
					id: data.experience,
				},
			},
		}

		await ProfileMongoDataSource.findOneAndUpdate({ user: data.user }, query, {
			new: true,
		})
	}
}
