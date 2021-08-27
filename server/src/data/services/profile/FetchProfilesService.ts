import { FetchProfilesRepository } from '@data/contracts'
import { FetchProfilesMapper } from '@data/mappers'

import { FetchProfilesUseCase } from '@domain/usecases'

export class FetchProfilesService implements FetchProfilesUseCase {
	constructor(
		private readonly fetchProfilesRepository: FetchProfilesRepository
	) {}

	async fetchProfiles() {
		const profiles = await this.fetchProfilesRepository.fetchProfiles()

		return FetchProfilesMapper.toDomainColletion(profiles)
	}
}
