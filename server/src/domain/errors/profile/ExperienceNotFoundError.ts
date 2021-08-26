export class ExperienceNotFoundError extends Error {
	constructor() {
		super('Experience not found')

		this.name = 'ExperienceNotFoundError'
	}
}
