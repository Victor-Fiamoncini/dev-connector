import { hash, genSalt } from 'bcrypt'

import { HashGeneratorAdapter } from '@data/contracts'

export class BcryptHashGeneratorAdapter implements HashGeneratorAdapter {
	async adapt(payload: string): Promise<string> {
		const hashedPayload = await hash(payload, await genSalt(12))

		return hashedPayload
	}
}
