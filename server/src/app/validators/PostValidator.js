import Joi from 'joi'
import validate from '../utils/validate'

class PostValidator {
	async store(req, res, next) {
		const schema = Joi.object().keys({
			name: Joi.string().allow('', null).default(''),
			text: Joi.string().required(),
			avatar: Joi.string().allow('', null).default(''),
			likes: Joi.array().required().allow([], null).default([]),
			comments: Joi.array().required().allow([], null).default([]),
		})

		await validate(res, next, req.body, schema)
	}
}

export default new PostValidator()
