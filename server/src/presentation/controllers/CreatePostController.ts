import { CreatePostUseCase } from '@domain/usecases'
import { Controller, HttpResponse, HttpResquest } from '@presentation/contracts'
import { CreatePostViewModel } from '@presentation/view-models'

namespace CreatePostController {
	export type Params = {
		name: string
		text: string
		avatar: string
		user: {
			id: string
		}
	}
}

export class CreatePostController implements Controller {
	constructor(private readonly createPostUseCase: CreatePostUseCase) {}

	async handle(
		httpRequest: HttpResquest<CreatePostController.Params>
	): Promise<HttpResponse<CreatePostViewModel>> {
		try {
			const { body } = httpRequest

			console.log('CHEGOUUUUU', body)

			const post = await this.createPostUseCase.createPost({
				name: body.name,
				text: body.text,
				avatar: body.avatar,
				user: body.user.id,
			})

			return HttpResponse.created({
				id: post.id,
				name: post.name,
				text: post.text,
				avatar: post.avatar,
				user: post.user,
			} as CreatePostViewModel)
		} catch (err) {
			return HttpResponse.serverError(err)
		}
	}
}
