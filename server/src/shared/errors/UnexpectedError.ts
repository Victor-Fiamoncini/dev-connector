export class UnexpectedError extends Error {
	constructor(reason: string) {
		super(`An unexpected error occured by: ${reason}`)
	}
}
