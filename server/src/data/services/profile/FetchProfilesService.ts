import { FetchProfilesRepository } from '@data/contracts'
import { Profile } from '@domain/entities'
import { FetchProfilesUseCase } from '@domain/usecases'

export class FetchProfilesService implements FetchProfilesUseCase {
	constructor(
		private readonly fetchProfilesRepository: FetchProfilesRepository
	) {}

	async fetchProfiles(): Promise<Profile[]> {
		const profiles = await this.fetchProfilesRepository.fetchProfiles()

		return profiles
	}
}
