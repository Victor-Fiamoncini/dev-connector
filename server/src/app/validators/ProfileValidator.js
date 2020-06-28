import Joi from 'joi'
import validate from '../utils/validate'

class ProfileValidator {
	async updateOrStore(req, res, next) {
		const schema = Joi.object().keys({
			company: Joi.string().allow('', null),
			website: Joi.string().allow('', null),
			location: Joi.string().allow('', null),
			status: Joi.string().required(),
			skills: Joi.string().required(),
			bio: Joi.string().allow('', null),
			githubusername: Joi.string().allow('', null),
			education: Joi.array(),
			social: Joi.object(),
		})

		await validate(res, next, req.body, schema)
	}

	async storeExperience(req, res, next) {
		const schema = Joi.object().keys({
			title: Joi.string().required(),
			company: Joi.string().required(),
			location: Joi.string().allow('', null),
			from: Joi.date().required(),
			to: Joi.date(),
			current: Joi.boolean().required(),
			description: Joi.string().allow('', null),
		})

		await validate(res, next, req.body, schema)
	}
}

export default new ProfileValidator()
