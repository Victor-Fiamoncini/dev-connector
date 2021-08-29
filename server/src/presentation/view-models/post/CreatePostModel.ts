import { Post } from '@domain/entities'

export class CreatePostModel {
	id: string
	name: string
	text: string
	avatar: string
	user: string

	static map(post: Post): CreatePostModel {
		return {
			id: post.id,
			name: post.name,
			text: post.text,
			avatar: post.avatar,
			user: post.user,
		}
	}
}
