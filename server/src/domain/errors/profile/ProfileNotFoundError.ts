export class ProfileNotFoundError extends Error {
	constructor() {
		super('Profile not found')

		this.name = 'ProfileNotFoundError'
	}
}
