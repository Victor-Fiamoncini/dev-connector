import { FetchProfilesRepository } from '@data/contracts'

import { FetchProfilesUseCase } from '@domain/usecases'

export class FetchProfilesService implements FetchProfilesUseCase {
	constructor(
		private readonly fetchProfilesRepository: FetchProfilesRepository
	) {}

	async run() {
		return this.fetchProfilesRepository.execute()
	}
}
