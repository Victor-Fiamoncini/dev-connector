export interface TokenGeneratorAdapter {
	generateToken(payload: object): Promise<string>
}
