import { Post } from '@domain/entities'

export namespace FetchPostModel {
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

export class FetchPostModel {
	id: string
	name: string
	text: string
	avatar: string
	likes: FetchPostModel.Like[]
	comments: FetchPostModel.Comment[]
	user: string

	static map(post: Post): FetchPostModel {
		return {
			id: post.id,
			name: post.name,
			text: post.text,
			avatar: post.avatar,
			likes: post.likes,
			comments: post.comments,
			user: post.user,
		}
	}
}
