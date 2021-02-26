import { AvatarGenerator } from '@data/contracts'
import { url } from 'gravatar'

export class GravatarAvatarGeneratorAdapter implements AvatarGenerator {
	async generateAvatar(payload: string): Promise<string> {
		const avatar = url(payload, {
			s: '200',
			r: 'pg',
			d: 'mm',
		})

		return avatar
	}
}
