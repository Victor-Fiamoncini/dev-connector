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
		httpRequest: HttpResquest<RefreshUserAuthenticationController.Params>
	): Promise<HttpResponse<RefreshUserAuthenticationModel>> {
		try {
			const { body } = httpRequest

			const user = await this.refreshUserAuthenticationUseCase.refreshAuthentication(
				body.user.id
			)

			return HttpResponse.ok({
				id: user.id,
				name: user.name,
				email: user.email,
				avatar: user.avatar,
			} as RefreshUserAuthenticationModel)
		} catch (err) {
			return HttpResponse.unauthorizedError(err)
		}
	}
}