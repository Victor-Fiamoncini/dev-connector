import { FetchProfilesUseCase } from '@domain/usecases'

import { Controller, HttpResponse } from '@presentation/contracts'
import { ProfileViewModel } from '@presentation/view-models'

export class FetchProfilesController implements Controller {
	constructor(private readonly fetchProfilesUseCase: FetchProfilesUseCase) {}

	async handle() {
		try {
			const profiles = await this.fetchProfilesUseCase.fetchProfiles()

			return HttpResponse.ok(ProfileViewModel.mapColletion(profiles))
		} catch (err) {
			return HttpResponse.serverError(err)
		}
	}
}
