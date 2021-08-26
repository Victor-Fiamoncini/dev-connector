import { Post } from '@domain/entities'

export namespace PostViewModel {
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

export class PostViewModel {
	constructor(
		public readonly id: string,
		public readonly name: string,
		public readonly text: string,
		public readonly avatar: string,
		public readonly likes: PostViewModel.Like[],
		public readonly comments: PostViewModel.Comment[],
		public readonly user: string
	) {}

	static map(post: Post) {
		return new PostViewModel(
			post.id,
			post.name,
			post.text,
			post.avatar,
			post.likes.map(like => ({ user: like.user })),
			post.comments.map(comment => ({
				user: comment.user,
				text: comment.text,
				name: comment.name,
				avatar: comment.avatar,
				date: comment.date,
			})),
			post.user
		)
	}

	static mapColletion(posts: Post[]) {
		return posts.map(post => {
			return new PostViewModel(
				post.id,
				post.name,
				post.text,
				post.avatar,
				post.likes.map(like => ({ user: like.user })),
				post.comments.map(comment => ({
					user: comment.user,
					text: comment.text,
					name: comment.name,
					avatar: comment.avatar,
					date: comment.date,
				})),
				post.user
			)
		})
	}
}
