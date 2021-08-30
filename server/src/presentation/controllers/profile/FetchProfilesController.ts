import { FetchProfilesUseCase } from '@domain/usecases'

import { Controller, HttpResponse } from '@presentation/contracts'
import { FetchProfilesViewModel } from '@presentation/view-models'

export class FetchProfilesController implements Controller {
	constructor(private readonly fetchProfilesUseCase: FetchProfilesUseCase) {}

	async handle() {
		try {
			const profiles = await this.fetchProfilesUseCase.run()

			return HttpResponse.ok(FetchProfilesViewModel.mapColletion(profiles))
		} catch (err) {
			return HttpResponse.serverError(err)
		}
	}
}
