export class ExperienceDeleteError extends Error {
	constructor() {
		super('Error to delete experience')

		this.name = 'ExperienceDeleteError'
	}
}
