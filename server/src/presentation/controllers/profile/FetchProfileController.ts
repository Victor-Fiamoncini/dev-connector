import { FetchProfileUseCase } from '@domain/usecases'

import { Controller, HttpResponse, HttpResquest } from '@presentation/contracts'

namespace FetchProfileController {
	export type Params = {
		id: string
	}
}

export class FetchProfileController implements Controller {
	constructor(private readonly fetchProfileUseCase: FetchProfileUseCase) {}

	async handle(httpRequest: HttpResquest<null, FetchProfileController.Params>) {
		const { id } = httpRequest.params

		try {
			const profile = await this.fetchProfileUseCase.run(id)

			return HttpResponse.ok(profile)
		} catch (err) {
			return HttpResponse.serverError(err)
		}
	}
}
