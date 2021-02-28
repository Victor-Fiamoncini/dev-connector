import { UnauthorizedError } from '@domain/errors'
import {
	TokenAuthenticationMiddleware,
	TokenVerifierAdapter,
} from '@utils/contracts'

// prettier-ignore
export class TokenValidateAuthenticationMiddleware implements TokenAuthenticationMiddleware {
	constructor(
		private readonly tokenSecret: string,
		private readonly tokenVerifierAdapter: TokenVerifierAdapter
	) {}

	async handle(authorization: string): Promise<string | object> {
		if (!authorization) {
			throw new UnauthorizedError()
		}

		const parts = authorization.split(' ')

		if (parts.length !== 2) {
			throw new UnauthorizedError()
		}

		const [scheme, token] = parts

		if (!/^Bearer$/i.test(scheme)) {
			throw new UnauthorizedError()
		}

		try {
			const verifiedData = await this.tokenVerifierAdapter.adapt(token, this.tokenSecret)

			return verifiedData
		} catch {
			throw new UnauthorizedError()
		}
	}
}
