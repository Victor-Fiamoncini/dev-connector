import { Profile, User } from '../models'

class ProfileController {
	async index(req, res) {}

	async show(req, res) {
		const profile = await Profile.findOne({ user: req.userId }).populate(
			'User',
			['name', 'avatar']
		)

		if (!profile) {
			return res.status(404).json({ error: 'Profile not found' })
		}

		return res.status(200).json(profile)
	}

	async store(req, res) {
		const { skills } = req.body

		if (skills) {
			req.body.skills = skills.split(',').map(skill => skill.trim())
		}

		let profile = await Profile.findOne({ user: req.userId })

		if (profile) {
			await profile.update(
				{ ...req.body, user: req.userId },
				{
					new: true,
					runValidators: true,
				}
			)

			return res.status(200).json(profile)
		}

		profile = new Profile({ ...req.body, user: req.userId })
		await profile.save()

		return res.status(201).json(profile)
	}

	async update(req, res) {}

	async destroy(req, res) {}
}

export default new ProfileController()
