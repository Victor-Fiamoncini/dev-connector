import { FetchUserRepositoriesUseCase } from '@domain/usecases'

import { Controller, HttpResponse, HttpResquest } from '@presentation/contracts'
import { RepositoryViewModel } from '@presentation/view-models'

namespace FetchUserRepositoriesController {
	export type Params = {
		username: string
	}
}

export class FetchUserRepositoriesController implements Controller {
	constructor(
		private readonly fetchUserRepositoriesUseCase: FetchUserRepositoriesUseCase
	) {}

	async handle(
		httpRequest: HttpResquest<null, FetchUserRepositoriesController.Params>
	) {
		try {
			const { username } = httpRequest.params

			const repos = await this.fetchUserRepositoriesUseCase.fetchRepos(username)

			return HttpResponse.ok(RepositoryViewModel.mapCollection(repos))
		} catch (err) {
			return HttpResponse.serverError(err)
		}
	}
}
