import { Post } from '@domain/entities'

export class DeletePostModel {
	id: string
	name: string
	text: string
	avatar: string
	user: string

	static map(post: Post): DeletePostModel {
		return {
			id: post.id,
			name: post.name,
			text: post.text,
			avatar: post.avatar,
			user: post.user,
		}
	}
}
