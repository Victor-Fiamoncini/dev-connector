import { FindUserRepositoriesRepository } from '@data/contracts'

import { FetchUserRepositoriesUseCase } from '@domain/usecases'

// prettier-ignore
export class FetchUserRepositoriesService implements FetchUserRepositoriesUseCase {
	constructor(
		private readonly findUserRepositoriesRepository: FindUserRepositoriesRepository
	) {}

	async fetchRepos(username: string) {
		const repos = await this.findUserRepositoriesRepository.findRepos(username)

		return repos
	}
}
