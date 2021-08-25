export interface Validator {
	validate(data: object): Promise<object | void>
}
