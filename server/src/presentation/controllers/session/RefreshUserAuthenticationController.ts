import { RefreshUserAuthenticationUseCase } from '@domain/usecases'

import { Controller, HttpResponse, HttpResquest } from '@presentation/contracts'
import { UserViewModel } from '@presentation/view-models'

namespace RefreshUserAuthenticationController {
	export type Params = {
		user: {
			id: string
		}
	}
}

export class RefreshUserAuthenticationController implements Controller {
	constructor(
		private readonly refreshUserAuthenticationUseCase: RefreshUserAuthenticationUseCase
	) {}

	async handle(
		httpRequest: HttpResquest<RefreshUserAuthenticationController.Params>
	) {
		try {
			const { body } = httpRequest

			const user = await this.refreshUserAuthenticationUseCase.refreshAuthentication(
				body.user.id
			)

			return HttpResponse.ok(UserViewModel.map(user))
		} catch (err) {
			return HttpResponse.unauthorizedError(err)
		}
	}
}
