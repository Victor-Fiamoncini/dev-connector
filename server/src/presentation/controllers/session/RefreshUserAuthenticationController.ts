import { RefreshUserAuthenticationUseCase } from '@domain/usecases'

import { Controller, HttpResponse, HttpResquest } from '@presentation/contracts'
import { RefreshUserAuthenticationModel } from '@presentation/models'

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
		httpRequest: HttpResquest<RefreshUserAuthenticationController.Params, null>
	): Promise<HttpResponse<RefreshUserAuthenticationModel>> {
		try {
			const { body } = httpRequest

			const user = await this.refreshUserAuthenticationUseCase.refreshAuthentication(
				body.user.id
			)

			return HttpResponse.ok(RefreshUserAuthenticationModel.map(user))
		} catch (err) {
			return HttpResponse.unauthorizedError(err)
		}
	}
}
