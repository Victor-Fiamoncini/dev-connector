import { User } from '../models'
import { url } from 'gravatar'

class UserController {
	async store(req, res) {
		const { name, email, password } = req.body

		let user = await User.findOne({ email })
		if (user) {
			return res.status(400).json({ error: 'User already exists' })
		}

		const avatar = url(email, {
			s: '200',
			r: 'pg',
			d: 'mm',
		})

		user = new User({ name, email, password, avatar })
		await user.save()

		return res.status(201).json({
			user,
			token: user.getSignedJwtToken(),
		})
	}
}

export default new UserController()
