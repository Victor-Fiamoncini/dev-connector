import env from '@main/config/env'

import { AuthenticationMiddleware } from '@utils/contracts'
import { JwtTokenVerifierAdapter } from '@utils/implementations'
import { TokenAuthenticationMiddleware } from '@utils/implementations'

export class TokenAuthenticationMiddlewareFactory {
	static make(): AuthenticationMiddleware {
		const tokenVerifierAdapter = new JwtTokenVerifierAdapter()

		return new TokenAuthenticationMiddleware(
			tokenVerifierAdapter,
			env.jwt.secret
		)
	}
}
