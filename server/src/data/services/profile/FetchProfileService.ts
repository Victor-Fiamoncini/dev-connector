import { FindProfileByIdRepository } from '@data/contracts'
import { ProfileDataModel } from '@data/models'

import { ProfileNotFoundError } from '@domain/errors'
import { FetchProfileUseCase } from '@domain/usecases'

export class FetchProfileService implements FetchProfileUseCase {
	constructor(
		private readonly findProfileByIdRepository: FindProfileByIdRepository
	) {}

	async fetchProfile(id: string) {
		const profile = await this.findProfileByIdRepository.findProfileById(id)

		if (!profile) {
			throw new ProfileNotFoundError()
		}

		return ProfileDataModel.fromDatabase(profile).toDomain()
	}
}
