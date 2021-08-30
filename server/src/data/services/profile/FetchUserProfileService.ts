import { FindProfileByUserRepository } from '@data/contracts'

import { ProfileNotFoundError } from '@domain/errors'
import { FetchUserProfileUseCase } from '@domain/usecases'

export class FetchUserProfileService implements FetchUserProfileUseCase {
	constructor(
		private readonly findProfileByUserRepository: FindProfileByUserRepository
	) {}

	async run(user: string) {
		const profile = await this.findProfileByUserRepository.execute(user)

		if (!profile) {
			throw new ProfileNotFoundError()
		}

		return profile
	}
}
