import { TokenGeneratorAdapter } from '@data/contracts'

import { EnsureUserAuthenticationUseCase } from '@domain/usecases'

import { Controller, HttpResponse, HttpResquest } from '@presentation/contracts'
import { UserViewModel } from '@presentation/view-models'

namespace EnsureUserAuthenticationController {
	export type Params = {
		email: string
		password: string
	}
}

export class EnsureUserAuthenticationController implements Controller {
	constructor(
		private readonly ensureUserAuthenticationUseCase: EnsureUserAuthenticationUseCase,
		private readonly tokenGeneratorAdapter: TokenGeneratorAdapter
	) {}

	async handle(
		httpRequest: HttpResquest<EnsureUserAuthenticationController.Params>
	) {
		try {
			const { email, password } = httpRequest.body

			const user = await this.ensureUserAuthenticationUseCase.ensureAuthentication(
				{
					email,
					password,
				}
			)

			const token = await this.tokenGeneratorAdapter.adapt({ id: user.id })

			return HttpResponse.ok(UserViewModel.map(user, token))
		} catch (err) {
			return HttpResponse.unauthorizedError(err)
		}
	}
}
