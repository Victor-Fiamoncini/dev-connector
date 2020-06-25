import { User } from '../models'

class SessionController {
	async store(req, res) {
		const { email, password } = req.body

		const user = await User.findOne({ email })

		if (!user) {
			return res.status(404).json({ error: 'unauthorized' })
		}

		if (!(await user.matchPassword(password))) {
			return res.status(401).json({ error: 'invalid credentials' })
		}

		user.password = undefined
		return res.status(200).json({
			user,
			token: user.getSignedJwtToken(),
		})
	}

	async refresh(req, res) {
		const user = await User.findById(req.userId).select('-password')

		if (!user) {
			return res.status(404).json({ error: 'unauthorized' })
		}

		return res.status(200).json(user)
	}
}

export default new SessionController()
