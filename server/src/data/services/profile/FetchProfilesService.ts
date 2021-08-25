import { FetchProfilesRepository } from '@data/contracts'
import { ProfileDataModel } from '@data/data-models'

import { FetchProfilesUseCase } from '@domain/usecases'

export class FetchProfilesService implements FetchProfilesUseCase {
	constructor(
		private readonly fetchProfilesRepository: FetchProfilesRepository
	) {}

	async fetchProfiles() {
		const profiles = await this.fetchProfilesRepository.fetchProfiles()

		return ProfileDataModel.fromDatabaseColletion(profiles).toDomainColletion()
	}
}
