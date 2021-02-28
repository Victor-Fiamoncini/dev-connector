export interface TokenVerifierAdapter {
	adapt(token: string, tokenSecret: string): Promise<string | object>
}
