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

export class Post {
	constructor(
		public id: string,
		public name: string,
		public text: string,
		public avatar: string,
		public likes: Post.Like[],
		public comments: Post.Comment[],
		public user: string,
		public created_at: Date,
		public update_at: Date
	) {}
}
