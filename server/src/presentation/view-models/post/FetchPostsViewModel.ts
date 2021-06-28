export namespace FetchPostsViewModel {
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

export type FetchPostsViewModel = {
	id: string
	name: string
	text: string
	avatar: string
	likes: FetchPostsViewModel.Like[]
	comments: FetchPostsViewModel.Comment[]
	user: string
}
