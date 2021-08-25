import * as Yup from 'yup'

import { Validator } from '@utils/contracts'
import { ValidatorError } from '@utils/errors'

export class CreateOrUpdateProfileValidator implements Validator {
	async validate(data: object) {
		const validationSchema = Yup.object().shape({
			company: Yup.string()
				.nullable()
				.notRequired()
				.typeError('Invalid company'),
			website: Yup.string()
				.nullable()
				.notRequired()
				.typeError('Invalid website'),
			location: Yup.string()
				.nullable()
				.notRequired()
				.typeError('Invalid location'),
			status: Yup.string()
				.required('Status is required')
				.typeError('Invalid status'),
			skills: Yup.string()
				.required('Skills is required')
				.typeError('Invalid skills'),
			bio: Yup.string().nullable().notRequired().typeError('Invalid bio'),
			githubusername: Yup.string()
				.nullable()
				.notRequired()
				.typeError('Invalid github username'),
			social: Yup.object().nullable().notRequired().typeError('Invalid social'),
		})

		try {
			await validationSchema.validate(data, { abortEarly: true })
		} catch (err) {
			throw new ValidatorError(err.message)
		}
	}
}
