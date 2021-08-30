import { UpdateProfileRepository } from '@data/contracts'

import { ProfileMongoDataSource } from '@infra/databases/mongo'

export class MongoUpdateProfileRepository implements UpdateProfileRepository {
	async execute(data: UpdateProfileRepository.Params) {
		const { id, ...updateData } = data

		try {
			return ProfileMongoDataSource.findByIdAndUpdate(id, updateData, {
				new: true,
				runValidators: true,
			})
		} catch {
			return null
		}
	}
}
