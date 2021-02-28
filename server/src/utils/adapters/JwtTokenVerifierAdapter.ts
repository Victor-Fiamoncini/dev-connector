import { TokenVerifierAdapter } from '@utils/contracts'
import { verify } from 'jsonwebtoken'

export class JwtTokenVerifierAdapter implements TokenVerifierAdapter {
	async adapt(token: string, tokenSecret: string): Promise<string | object> {
		const verifiedPayload = verify(token, tokenSecret)

		return verifiedPayload
	}
}
