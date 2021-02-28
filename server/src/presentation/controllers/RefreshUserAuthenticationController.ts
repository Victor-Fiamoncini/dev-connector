import { RefreshUserAuthenticationUseCase } from '@domain/usecases'
import { Controller, HttpResponse, HttpResquest } from '@presentation/contracts'
import { CreateUserViewModel } from '@presentation/view-models'

namespace RefreshUserAuthenticationController {
	export type Params = {
		id: string
	}
}

export class RefreshUserAuthenticationController implements Controller {
	constructor(
		private readonly refreshUserAuthenticationUseCase: RefreshUserAuthenticationUseCase
	) {}

	async handle(
		httpRequest: HttpResquest<RefreshUserAuthenticationController.Params>
	): Promise<HttpResponse<CreateUserViewModel>> {
		try {
			const { body } = httpRequest

			const user = await this.refreshUserAuthenticationUseCase.refreshAuthentication(
				body.id
			)

			return HttpResponse.ok(user)
		} catch (err) {
			return HttpResponse.unauthorizedError(err)
		}
	}
}
