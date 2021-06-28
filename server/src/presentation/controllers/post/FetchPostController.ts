import { FetchPostUseCase } from '@domain/usecases'
import { Controller, HttpResponse, HttpResquest } from '@presentation/contracts'
import { FetchPostModel } from '@presentation/models'

namespace FetchPostController {
	export type Params = {
		id: string
	}
}

export class FetchPostController implements Controller {
	constructor(private readonly fetchPostUseCase: FetchPostUseCase) {}

	async handle(
		httpRequest: HttpResquest<FetchPostController.Params>
	): Promise<HttpResponse<FetchPostModel>> {
		try {
			const post = await this.fetchPostUseCase.fetchPost(httpRequest.body.id)

			return HttpResponse.ok(FetchPostModel.map(post))
		} catch (err) {
			return HttpResponse.serverError(err)
		}
	}
}
