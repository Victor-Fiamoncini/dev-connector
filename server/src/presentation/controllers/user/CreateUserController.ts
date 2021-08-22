import { TokenGeneratorAdapter } from '@data/contracts'

import { CreateUserUseCase } from '@domain/usecases'

import { Controller, HttpResponse, HttpResquest } from '@presentation/contracts'
import { UserViewModel } from '@presentation/view-models'

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

	async handle(httpRequest: HttpResquest<CreateUserController.Params>) {
		try {
			const { name, email, password } = httpRequest.body

			const user = await this.createUserUseCase.createUser({
				name,
				email,
				password,
			})

			const token = await this.tokenGeneratorAdapter.adapt({ id: user.id })

			return HttpResponse.created(UserViewModel.map(user, token))
		} catch (err) {
			return HttpResponse.serverError(err)
		}
	}
}
