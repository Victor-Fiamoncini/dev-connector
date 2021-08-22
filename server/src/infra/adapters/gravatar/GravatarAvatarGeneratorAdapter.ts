import { url } from 'gravatar'

import { AvatarGeneratorAdapter } from '@data/contracts'

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
