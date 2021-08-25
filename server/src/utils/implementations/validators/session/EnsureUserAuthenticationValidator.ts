import * as Yup from 'yup'

import { Validator } from '@utils/contracts'
import { ValidatorError } from '@utils/errors'

export class EnsureUserAuthenticationValidator implements Validator {
	async validate(data: object) {
		const validationSchema = Yup.object().shape({
			email: Yup.string()
				.email()
				.required('E-mail is required')
				.typeError('Invalid e-mail'),
			password: Yup.string()
				.min(6, 'Invalid password')
				.required('Password is required')
				.typeError('Invalid password'),
		})

		try {
			await validationSchema.validate(data, { abortEarly: true })
		} catch (err) {
			throw new ValidatorError(err.message)
		}
	}
}
