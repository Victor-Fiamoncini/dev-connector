export interface TokenGeneratorAdapter {
	adapt(payload: object): Promise<string>
}
