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

export type FetchPostModel = {
	id: string
	name: string
	text: string
	avatar: string
	likes: FetchPostModel.Like[]
	comments: FetchPostModel.Comment[]
	user: string
}
