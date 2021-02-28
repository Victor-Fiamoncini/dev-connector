import env from '@main/config/env'
import { TokenAuthenticationMiddleware } from '@utils/contracts'
import { TokenValidateAuthenticationMiddleware } from '@utils/middlewares'

export class TokenValidateAuthenticationMiddlewareFactory {
	static make(): TokenAuthenticationMiddleware {
		const tokenve = new TokenVe()

		const tokenAuthenticationMiddleware = new TokenValidateAuthenticationMiddleware(
			env.jwt.secret
		)
	}
}
