import env from '@main/config/env'
import { JwtTokenVerifierAdapter } from '@utils/adapters'
import { TokenAuthenticationMiddleware } from '@utils/contracts'
import { TokenValidateAuthenticationMiddleware } from '@utils/middlewares'

export class TokenValidateAuthenticationMiddlewareFactory {
	static make(): TokenAuthenticationMiddleware {
		const tokenVerifierAdapter = new JwtTokenVerifierAdapter()

		return new TokenValidateAuthenticationMiddleware(
			env.jwt.secret,
			tokenVerifierAdapter
		)
	}
}
