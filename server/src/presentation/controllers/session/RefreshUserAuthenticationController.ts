import { RefreshUserAuthenticationUseCase } from '@domain/usecases'

import { Controller, HttpResponse, HttpResquest } from '@presentation/contracts'

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
		const { body } = httpRequest

		try {
			const user = await this.refreshUserAuthenticationUseCase.refreshAuthentication(
				body.user.id
			)

			return HttpResponse.ok(user)
		} catch (err) {
			return HttpResponse.unauthorizedError(err)
		}
	}
}
