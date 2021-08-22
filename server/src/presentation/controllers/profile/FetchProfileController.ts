import { FetchProfileUseCase } from '@domain/usecases'

import { Controller, HttpResponse, HttpResquest } from '@presentation/contracts'
import { FetchProfileModel } from '@presentation/models'

namespace FetchProfileController {
	export type Params = {
		id: string
	}
}

export class FetchProfileController implements Controller {
	constructor(private readonly fetchProfileUseCase: FetchProfileUseCase) {}

	async handle(
		httpRequest: HttpResquest<null, FetchProfileController.Params>
	): Promise<HttpResponse<FetchProfileModel[]>> {
		try {
			const { id } = httpRequest.params

			const profile = await this.fetchProfileUseCase.fetchProfile(id)

			return HttpResponse.ok(FetchProfileModel.map(profile))
		} catch (err) {
			return HttpResponse.serverError(err)
		}
	}
}
