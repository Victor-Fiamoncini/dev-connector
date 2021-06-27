export namespace Post {
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

export type Post = {
	id: string
	name: string
	text: string
	avatar: string
	likes: Post.Like[]
	comments: Post.Comment[]
	user: string
	created_at: Date
	update_at: Date
}
