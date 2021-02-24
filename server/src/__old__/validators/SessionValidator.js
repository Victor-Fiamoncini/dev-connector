import Joi from 'joi'
import validate from '../utils/validate'

class SessionValidator {
	async store(req, res, next) {
		const schema = Joi.object().keys({
			email: Joi.string().email().required(),
			password: Joi.string().min(6).required(),
		})

		await validate(res, next, req.body, schema)
	}
}

export default new SessionValidator()
