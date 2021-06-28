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

export type FetchPostsModel = {
	id: string
	name: string
	text: string
	avatar: string
	likes: FetchPostsModel.Like[]
	comments: FetchPostsModel.Comment[]
	user: string
}
