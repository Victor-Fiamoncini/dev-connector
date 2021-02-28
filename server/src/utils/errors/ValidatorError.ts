export class ValidatorError extends Error {
	constructor(readonly message: string) {
		super(message)

		this.name = 'ValidatorError'
		this.message = message
	}
}
