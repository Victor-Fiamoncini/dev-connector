import * as Yup from 'yup'

import { Validator } from '@utils/contracts'
import { ValidatorError } from '@utils/errors'

export class CreateExperienceValidator implements Validator {
	async validate(data: object) {
		const validationSchema = Yup.object().shape({
			title: Yup.string().required().typeError('Invalid title'),
			company: Yup.string().required().typeError('Invalid company'),
			location: Yup.string()
				.nullable()
				.notRequired()
				.typeError('Invalid location'),
			from: Yup.date()
				.required('From date is required')
				.typeError('Invalid from date'),
			to: Yup.date().nullable().notRequired().typeError('Invalid from date'),
			current: Yup.boolean().nullable().notRequired().default(false),
			description: Yup.string()
				.nullable()
				.notRequired()
				.typeError('Invalid description'),
		})

		try {
			await validationSchema.validate(data, { abortEarly: true })
		} catch (err) {
			throw new ValidatorError(err.message)
		}
	}
}
