import { TokenGeneratorAdapter } from '@data/contracts'

import { CreateUserUseCase } from '@domain/usecases'

import { Controller, HttpResponse, HttpResquest } from '@presentation/contracts'
import { CreateUserModel } from '@presentation/models'

namespace CreateUserController {
	export type Params = {
		name: string
		email: string
		password: string
	}
}

export class CreateUserController implements Controller {
	constructor(
		private readonly createUserUseCase: CreateUserUseCase,
		private readonly tokenGeneratorAdapter: TokenGeneratorAdapter
	) {}

	async handle(
		httpRequest: HttpResquest<CreateUserController.Params, null>
	): Promise<HttpResponse<CreateUserModel>> {
		try {
			const { name, email, password } = httpRequest.body

			const user = await this.createUserUseCase.createUser({
				name,
				email,
				password,
			})

			const token = await this.tokenGeneratorAdapter.adapt({ id: user.id })

			return HttpResponse.created(CreateUserModel.map(user, token))
		} catch (err) {
			return HttpResponse.serverError(err)
		}
	}
}
