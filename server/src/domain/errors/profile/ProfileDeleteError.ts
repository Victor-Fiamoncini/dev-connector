export class ProfileUpdateError extends Error {
	constructor() {
		super('Error to update profile')

		this.name = 'ProfileUpdateError'
	}
}
