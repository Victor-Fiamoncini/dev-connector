import { TokenGeneratorAdapter } from '@data/contracts'
import { CreateUserUseCase } from '@domain/usecases'
import {
	Controller,
	created,
	HttpResponse,
	HttpResquest,
	serverError,
} from '@presentation/contracts'
import { CreateUserViewModel } from '@presentation/view-models'

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
		httpRequest: HttpResquest<CreateUserController.Params>
	): Promise<HttpResponse<CreateUserViewModel>> {
		try {
			const { body } = httpRequest

			const user = await this.createUserUseCase.createUser(body)

			const token = await this.tokenGeneratorAdapter.generateToken({
				id: user.id,
			})

			return created({ user, token })
		} catch (err) {
			return serverError(err)
		}
	}
}
