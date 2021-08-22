import { FetchProfilesUseCase } from '@domain/usecases'

import { Controller, HttpResponse } from '@presentation/contracts'
import { FetchProfilesModel } from '@presentation/models'

export class FetchProfilesController implements Controller {
	constructor(private readonly fetchProfilesUseCase: FetchProfilesUseCase) {}

	async handle(): Promise<HttpResponse<FetchProfilesModel[]>> {
		try {
			const profiles = await this.fetchProfilesUseCase.fetchProfiles()

			return HttpResponse.ok(FetchProfilesModel.mapColletion(profiles))
		} catch (err) {
			return HttpResponse.serverError(err)
		}
	}
}
