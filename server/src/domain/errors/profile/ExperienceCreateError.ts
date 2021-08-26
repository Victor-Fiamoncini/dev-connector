export class ExperienceCreateError extends Error {
	constructor() {
		super('Error to create experience')

		this.name = 'ExperienceCreateError'
	}
}
