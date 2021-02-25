import { Controller, HttpResponse } from '@presentation/contracts'

export class CreateUserController implements Controller {
	async handle(): Promise<HttpResponse> {
		throw new Error('Method not implemented.')
	}
}
