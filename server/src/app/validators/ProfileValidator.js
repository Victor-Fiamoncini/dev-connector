import Joi from 'joi'
import validate from '../utils/validate'

class ProfileValidator {
	async updateOrStore(req, res, next) {
		const schema = Joi.object().keys({
			company: Joi.string(),
			website: Joi.string(),
			location: Joi.string(),
			status: Joi.string().required(),
			skills: Joi.string().required(),
			bio: Joi.string(),
			githubusername: Joi.string(),
			experience: Joi.array(),
			education: Joi.array(),
			social: Joi.object(),
		})

		await validate(res, next, req.body, schema)
	}
}

export default new ProfileValidator()
