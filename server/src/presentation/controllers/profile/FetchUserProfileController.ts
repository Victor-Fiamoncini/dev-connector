import { FetchUserProfileUseCase } from '@domain/usecases'

import { Controller, HttpResponse, HttpResquest } from '@presentation/contracts'
import { ProfileViewModel } from '@presentation/view-models'

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
		try {
			const { body } = httpResquest

			const profile = await this.fetchUserProfileUseCase.fetchUserProfile(
				body.user.id
			)

			return HttpResponse.ok(ProfileViewModel.map(profile))
		} catch (err) {
			return HttpResponse.serverError(err)
		}
	}
}
