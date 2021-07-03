import { UnauthorizedError } from '@utils/errors'
import {
	AuthenticationMiddleware,
	TokenVerifierAdapter,
} from '@utils/contracts'

// prettier-ignore

export class TokenAuthenticationMiddleware implements AuthenticationMiddleware {
	constructor(
		private readonly tokenVerifierAdapter: TokenVerifierAdapter,
		private readonly tokenSecret: string,
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
			const verifiedData = await this.tokenVerifierAdapter.adapt(
				token,
				this.tokenSecret
			)

			return verifiedData
		} catch {
			throw new UnauthorizedError()
		}
	}
}
