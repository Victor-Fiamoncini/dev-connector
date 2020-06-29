import Joi from 'joi'
import validate from '../utils/validate'

class ProfileValidator {
	async updateOrStore(req, res, next) {
		const schema = Joi.object().keys({
			company: Joi.string().allow('', null).default(''),
			website: Joi.string().allow('', null).default(''),
			location: Joi.string().allow('', null).default(''),
			status: Joi.string().required(),
			skills: Joi.string().required(),
			bio: Joi.string().allow('', null).default(''),
			githubusername: Joi.string().allow('', null).default(''),
			social: Joi.object().allow({}, null),
		})

		await validate(res, next, req.body, schema)
	}

	async storeExperience(req, res, next) {
		const schema = Joi.object().keys({
			title: Joi.string().required(),
			company: Joi.string().required(),
			location: Joi.string().allow('', null).default(''),
			from: Joi.date().required(),
			to: Joi.date().allow('', null).default(''),
			current: Joi.boolean().required(),
			description: Joi.string().allow('', null).default(''),
		})

		await validate(res, next, req.body, schema)
	}

	async storeEducation(req, res, next) {
		const schema = Joi.object().keys({
			school: Joi.string().required(),
			degree: Joi.string().required(),
			fieldofstudy: Joi.string().allow('', null).default(''),
			from: Joi.date().required(),
			to: Joi.date().allow('', null).default(''),
			current: Joi.boolean().default(false),
			description: Joi.string().allow('', null).default(''),
		})

		await validate(res, next, req.body, schema)
	}
}

export default new ProfileValidator()
