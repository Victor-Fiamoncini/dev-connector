import { FetchProfileUseCase } from '@domain/usecases'

import { Controller, HttpResponse, HttpResquest } from '@presentation/contracts'
import { ProfileViewModel } from '@presentation/view-models'

namespace FetchProfileController {
	export type Params = {
		id: string
	}
}

export class FetchProfileController implements Controller {
	constructor(private readonly fetchProfileUseCase: FetchProfileUseCase) {}

	async handle(httpRequest: HttpResquest<null, FetchProfileController.Params>) {
		try {
			const { id } = httpRequest.params

			const profile = await this.fetchProfileUseCase.fetchProfile(id)

			return HttpResponse.ok(ProfileViewModel.map(profile))
		} catch (err) {
			return HttpResponse.serverError(err)
		}
	}
}
