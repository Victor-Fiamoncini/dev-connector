import { FetchPostsUseCase } from '@domain/usecases'
import { Controller, HttpResponse } from '@presentation/contracts'
import { FetchPostsViewModel } from '@presentation/view-models'

export class FetchPostsController implements Controller {
	constructor(private readonly fetchPostsUseCase: FetchPostsUseCase) {}

	async handle(): Promise<HttpResponse<FetchPostsViewModel[]>> {
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

			return HttpResponse.ok(presentedPosts as FetchPostsViewModel[])
		} catch (err) {
			return HttpResponse.serverError(err)
		}
	}
}
