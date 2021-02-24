import Joi from 'joi'
import validate from '../utils/validate'

class PostValidator {
	async store(req, res, next) {
		const schema = Joi.object().keys({
			text: Joi.string().required(),
		})

		await validate(res, next, req.body, schema)
	}

	async storeComment(req, res, next) {
		const schema = Joi.object().keys({
			text: Joi.string().required(),
		})

		await validate(res, next, req.body, schema)
	}
}

export default new PostValidator()
