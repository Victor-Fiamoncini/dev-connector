import { FindProfileByUserRepository } from '@data/contracts'
import { ProfileDataModel } from '@data/models'

import { ProfileNotFoundError } from '@domain/errors'
import { FetchUserProfileUseCase } from '@domain/usecases'

export class FetchUserProfileService implements FetchUserProfileUseCase {
	constructor(
		private readonly findProfileByUserRepository: FindProfileByUserRepository
	) {}

	async fetchUserProfile(user: string) {
		const profile = await this.findProfileByUserRepository.findProfileByUser(
			user
		)

		if (!profile) {
			throw new ProfileNotFoundError()
		}

		return ProfileDataModel.fromDatabase(profile).toDomain()
	}
}
