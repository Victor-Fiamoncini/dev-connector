import { CreateUserUseCase } from '@domain/usecases'
import {
	Controller,
	created,
	HttpResponse,
	HttpResquest,
	serverError,
} from '@presentation/contracts'
import { CreateUserDTO } from '@presentation/dtos'
import { CreateUserViewModel } from '@presentation/view-models'

export class CreateUserController implements Controller {
	constructor(private readonly createUserUseCase: CreateUserUseCase) {}

	async handle(
		httpRequest: HttpResquest<CreateUserDTO>
	): Promise<HttpResponse<CreateUserViewModel>> {
		try {
			const { body } = httpRequest

			const user = await this.createUserUseCase.createUser(body)

			return created(user)
		} catch (err) {
			return serverError(err)
		}
	}
}
