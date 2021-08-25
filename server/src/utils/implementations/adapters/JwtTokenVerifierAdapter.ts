import { verify } from 'jsonwebtoken'

import { TokenVerifierAdapter } from '@utils/contracts'

export class JwtTokenVerifierAdapter implements TokenVerifierAdapter {
	async adapt(token: string, tokenSecret: string) {
		const verifiedPayload = verify(token, tokenSecret)

		return verifiedPayload
	}
}
