import { TokenGenerator } from '@data/contracts'
import env from '@main/config/env'
import { sign } from 'jsonwebtoken'

export class JwtTokenGeneratorAdapter implements TokenGenerator {
	async generateToken(payload: object): Promise<string> {
		const { jwt } = env

		return sign(payload, jwt.secret, { expiresIn: jwt.expires })
	}
}
