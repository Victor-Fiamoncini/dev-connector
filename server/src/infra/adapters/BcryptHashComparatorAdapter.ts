import { HashComparatorAdapter } from '@data/contracts'
import { compare } from 'bcrypt'

export class BcryptHashComparatorAdapter implements HashComparatorAdapter {
	async adapt(payload: string, hashedPayload: string): Promise<boolean> {
		const payloadMatched = await compare(payload, hashedPayload)

		return payloadMatched
	}
}
