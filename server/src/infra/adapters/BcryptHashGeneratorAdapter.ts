import { HashGenerator } from '@data/contracts'
import { hash, genSalt } from 'bcrypt'

export class BcryptHashGeneratorAdapter implements HashGenerator {
	async generateHash(payload: string): Promise<string> {
		const hashedPayload = await hash(payload, await genSalt(12))

		return hashedPayload
	}
}
