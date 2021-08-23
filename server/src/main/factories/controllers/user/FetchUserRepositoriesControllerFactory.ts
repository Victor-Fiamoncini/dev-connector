import { FetchUserRepositoriesService } from '@data/services'

import { AxiosFindUserRepositoriesRepository } from '@infra/repositories'

import env from '@main/config/env'

import { Controller } from '@presentation/contracts'
import { FetchUserRepositoriesController } from '@presentation/controllers'

export class FetchUserRepositoriesControllerFactory {
	static make(): Controller {
		const findUserRepositoriesRepository = new AxiosFindUserRepositoriesRepository(
			env.github.clientID,
			env.github.clientSecret
		)

		const fetchUserRepositoriesService = new FetchUserRepositoriesService(
			findUserRepositoriesRepository
		)

		return new FetchUserRepositoriesController(fetchUserRepositoriesService)
	}
}
