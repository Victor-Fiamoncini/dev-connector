import { UpdateProfileRepository } from '@data/contracts'

import { ProfileMongoDataSource } from '@infra/databases/mongo'

export class MongoUpdateProfileRepository implements UpdateProfileRepository {
	async updateProfile(data: UpdateProfileRepository.Params) {
		const { id, ...updateData } = data

		const updatedProfile = await ProfileMongoDataSource.findByIdAndUpdate(
			id,
			updateData,
			{
				new: true,
				runValidators: true,
			}
		)

		if (!updatedProfile) {
			return null
		}

		return updatedProfile
	}
}
