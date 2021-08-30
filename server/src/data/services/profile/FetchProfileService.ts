import { FindProfileByIdRepository } from '@data/contracts'

import { ProfileNotFoundError } from '@domain/errors'
import { FetchProfileUseCase } from '@domain/usecases'

export class FetchProfileService implements FetchProfileUseCase {
	constructor(
		private readonly findProfileByIdRepository: FindProfileByIdRepository
	) {}

	async run(profile: string) {
		const profileById = await this.findProfileByIdRepository.execute(profile)

		if (!profileById) {
			throw new ProfileNotFoundError()
		}

		return profileById
	}
}
