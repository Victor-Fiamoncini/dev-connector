import { FetchPostUseCase } from '@domain/usecases'

import { Controller, HttpResponse, HttpResquest } from '@presentation/contracts'

namespace FetchPostController {
	export type Params = {
		id: string
	}
}

export class FetchPostController implements Controller {
	constructor(private readonly fetchPostUseCase: FetchPostUseCase) {}

	async handle(httpRequest: HttpResquest<null, FetchPostController.Params>) {
		const { id } = httpRequest.params

		try {
			const post = await this.fetchPostUseCase.fetchPost(id)

			return HttpResponse.ok(post)
		} catch (err) {
			return HttpResponse.serverError(err)
		}
	}
}
