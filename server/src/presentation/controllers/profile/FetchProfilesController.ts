import { FetchProfilesUseCase } from '@domain/usecases'

import { Controller, HttpResponse } from '@presentation/contracts'

export class FetchProfilesController implements Controller {
	constructor(private readonly fetchProfilesUseCase: FetchProfilesUseCase) {}

	async handle() {
		try {
			const profiles = await this.fetchProfilesUseCase.fetchProfiles()

			return HttpResponse.ok(profiles)
		} catch (err) {
			return HttpResponse.serverError(err)
		}
	}
}
