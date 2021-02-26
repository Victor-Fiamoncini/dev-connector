export interface TokenGenerator {
	generateToken(payload: object): Promise<string>
}
