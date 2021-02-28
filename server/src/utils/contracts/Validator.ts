export interface Validator {
	validate(data: object): Promise<any>
}
