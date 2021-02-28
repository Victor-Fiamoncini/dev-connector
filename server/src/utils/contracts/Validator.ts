export interface Validator {
	validate(data: object): Promise<void>
}
