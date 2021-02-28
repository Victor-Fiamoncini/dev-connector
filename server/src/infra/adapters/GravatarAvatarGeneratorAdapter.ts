import { AvatarGeneratorAdapter } from '@data/contracts'
import { url } from 'gravatar'

export class GravatarAvatarGeneratorAdapter implements AvatarGeneratorAdapter {
	async adapt(payload: string): Promise<string> {
		const avatar = url(payload, {
			s: '200',
			r: 'pg',
			d: 'mm',
		})

		return avatar
	}
}
