import { Validator } from '@utils/contracts'
import { ValidatorError } from '@utils/errors'
import * as Yup from 'yup'

export class EnsureUserAuthenticationValidator implements Validator {
	async validate(data: object): Promise<void> {
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
			throw new ValidatorError(err.errors[0])
		}
	}
}
