export class PostDeleteError extends Error {
	constructor() {
		super('Error to delete post')

		this.name = 'PostDeleteError'
	}
}
