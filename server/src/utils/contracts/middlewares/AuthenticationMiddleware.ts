export interface AuthenticationMiddleware {
	handle(payload: string | object): Promise<string | object>
}
