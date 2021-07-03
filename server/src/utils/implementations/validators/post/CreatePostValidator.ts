import { Validator } from '@utils/contracts'
import { ValidatorError } from '@utils/errors'
import * as Yup from 'yup'

export class CreatePostValidator implements Validator {
	async validate(data: object): Promise<void> {
		const validationSchema = Yup.object().shape({
			text: Yup.string()
				.min(2, 'Invalid text')
				.max(500, 'Invalid text')
				.required('Text is required')
				.typeError('Invalid text'),
		})

		try {
			await validationSchema.validate(data, { abortEarly: true })
		} catch (err) {
			throw new ValidatorError(err.message)
		}
	}
}
