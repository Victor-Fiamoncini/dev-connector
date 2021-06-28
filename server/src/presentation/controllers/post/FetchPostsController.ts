import { FetchPostsUseCase } from '@domain/usecases'
import { Controller, HttpResponse } from '@presentation/contracts'
import { FetchPostsModel } from '@presentation/models'

export class FetchPostsController implements Controller {
	constructor(private readonly fetchPostsUseCase: FetchPostsUseCase) {}

	async handle(): Promise<HttpResponse<FetchPostsModel[]>> {
		try {
			const posts = await this.fetchPostsUseCase.fetchPosts()

			const presentedPosts = posts.map(post => ({
				id: post.id,
				name: post.name,
				text: post.text,
				avatar: post.avatar,
				likes: post.likes,
				comments: post.comments,
				user: post.user,
			}))

			return HttpResponse.ok(presentedPosts as FetchPostsModel[])
		} catch (err) {
			return HttpResponse.serverError(err)
		}
	}
}
