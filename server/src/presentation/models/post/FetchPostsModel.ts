import { Post } from '@domain/entities'

export namespace FetchPostsModel {
	export type Like = {
		user: string
	}

	export type Comment = {
		user: string
		text: string
		name: string
		avatar: string
		date: string
	}
}

export class FetchPostsModel {
	id: string
	name: string
	text: string
	avatar: string
	likes: FetchPostsModel.Like[]
	comments: FetchPostsModel.Comment[]
	user: string

	static mapColletion(posts: Post[]): FetchPostsModel[] {
		return posts.map(post => ({
			id: post.id,
			name: post.name,
			text: post.text,
			avatar: post.avatar,
			likes: post.likes,
			comments: post.comments,
			user: post.user,
		}))
	}
}
