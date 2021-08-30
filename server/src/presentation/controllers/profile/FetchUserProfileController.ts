import { FetchUserProfileUseCase } from '@domain/usecases'

import { Controller, HttpResponse, HttpResquest } from '@presentation/contracts'
import { FetchUserProfileViewModel } from '@presentation/view-models'

namespace FetchUserProfileController {
	export type Params = {
		user: {
			id: string
		}
	}
}

export class FetchUserProfileController implements Controller {
	constructor(
		private readonly fetchUserProfileUseCase: FetchUserProfileUseCase
	) {}

	async handle(httpResquest: HttpResquest<FetchUserProfileController.Params>) {
		const { body } = httpResquest

		try {
			const profile = await this.fetchUserProfileUseCase.run(body.user.id)

			return HttpResponse.ok(FetchUserProfileViewModel.map(profile))
		} catch (err) {
			return HttpResponse.serverError(err)
		}
	}
}
