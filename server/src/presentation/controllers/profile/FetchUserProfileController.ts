import { FetchUserProfileUseCase } from '@domain/usecases'

import { Controller, HttpResponse, HttpResquest } from '@presentation/contracts'

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
			const profile = await this.fetchUserProfileUseCase.fetchUserProfile(
				body.user.id
			)

			return HttpResponse.ok(profile)
		} catch (err) {
			return HttpResponse.serverError(err)
		}
	}
}
