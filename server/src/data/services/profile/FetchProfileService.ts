import { FindProfileByIdRepository } from '@data/contracts'

import { Profile } from '@domain/entities'
import { ProfileNotFoundError } from '@domain/errors'
import { FetchProfileUseCase } from '@domain/usecases'

export class FetchProfileService implements FetchProfileUseCase {
	constructor(
		private readonly findProfileByIdRepository: FindProfileByIdRepository
	) {}

	async fetchProfile(id: string): Promise<Profile> {
		const profile = await this.findProfileByIdRepository.findProfileById(id)

		if (!profile) {
			throw new ProfileNotFoundError()
		}

		return profile
	}
}
