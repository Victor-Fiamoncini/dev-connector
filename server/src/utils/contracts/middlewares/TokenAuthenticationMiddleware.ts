export interface TokenAuthenticationMiddleware {
	handle(token: string): Promise<string | object>
}
