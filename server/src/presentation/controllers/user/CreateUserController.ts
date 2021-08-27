import { TokenGeneratorAdapter } from '@data/contracts'

import { CreateUserUseCase } from '@domain/usecases'

import { Controller, HttpResponse, HttpResquest } from '@presentation/contracts'

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
		const { name, email, password } = httpRequest.body

		try {
			const user = await this.createUserUseCase.createUser({
				name,
				email,
				password,
			})

			const token = await this.tokenGeneratorAdapter.adapt({ id: user.id })

			return HttpResponse.created({ user, token })
		} catch (err) {
			return HttpResponse.serverError(err)
		}
	}
}
