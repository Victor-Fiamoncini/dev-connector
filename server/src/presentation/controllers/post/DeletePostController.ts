import { DeletePostUseCase } from '@domain/usecases'

import { Controller, HttpResponse, HttpResquest } from '@presentation/contracts'

namespace DeletePostController {
	export type BodyParams = {
		user: {
			id: string
		}
	}

	export type UrlParams = {
		id: string
	}
}

export class DeletePostController implements Controller {
	constructor(private readonly deletePostUseCase: DeletePostUseCase) {}

	async handle(
		httpRequest: HttpResquest<
			DeletePostController.BodyParams,
			DeletePostController.UrlParams
		>
	) {
		const { id } = httpRequest.params
		const { user } = httpRequest.body

		try {
			const deletedPost = await this.deletePostUseCase.deletePost({
				post: id,
				user: user.id,
			})

			return HttpResponse.ok(deletedPost)
		} catch (err) {
			return HttpResponse.serverError(err)
		}
	}
}
