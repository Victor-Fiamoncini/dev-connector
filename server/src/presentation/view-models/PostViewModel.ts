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
		public id: string,
		public name: string,
		public text: string,
		public avatar: string,
		public likes: PostViewModel.Like[],
		public comments: PostViewModel.Comment[],
		public user: string
	) {}

	static map(post: Post) {
		return new PostViewModel(
			post.id,
			post.name,
			post.text,
			post.avatar,
			post.likes,
			post.comments,
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
				post.likes,
				post.comments,
				post.user
			)
		})
	}
}
