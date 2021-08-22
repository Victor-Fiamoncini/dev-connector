import { FindProfileByUserRepository } from '@data/contracts'

import { Profile } from '@domain/entities'
import { ProfileNotFoundError } from '@domain/errors'
import { FetchUserProfileUseCase } from '@domain/usecases'

export class FetchUserProfileService implements FetchUserProfileUseCase {
	constructor(
		private readonly findProfileByUserRepository: FindProfileByUserRepository
	) {}

	async fetchUserProfile(user: string): Promise<Profile> {
		const profile = await this.findProfileByUserRepository.findProfileByUser(
			user
		)

		if (!profile) {
			throw new ProfileNotFoundError()
		}

		return profile
	}
}
