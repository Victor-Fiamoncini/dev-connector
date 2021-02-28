import { TokenGeneratorAdapter } from '@data/contracts'
import { sign } from 'jsonwebtoken'

export class JwtTokenGeneratorAdapter implements TokenGeneratorAdapter {
	constructor(
		private readonly tokenSecret: string,
		private readonly tokenExpireTime: string
	) {}

	async adapt(payload: object): Promise<string> {
		return sign(payload, this.tokenSecret, { expiresIn: this.tokenExpireTime })
	}
}
