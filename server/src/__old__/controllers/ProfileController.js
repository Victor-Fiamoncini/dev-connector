import axios from 'axios'
import { Profile, User } from '../models'

class ProfileController {
	async index(req, res) {
		const profiles = await Profile.find().populate('user', ['name', 'avatar'])

		if (!profiles) {
			return res.status(404).json({ error: 'Profiles not found' })
		}

		return res.status(200).json(profiles)
	}

	async show(req, res) {
		const profile = await Profile.findOne({
			user: req.params.id,
		}).populate('user', ['name', 'avatar'])

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

	async destroy(req, res) {
		await Profile.findOneAndDelete({ user: req.userId })
		await User.findOneAndRemove({ _id: req.userId })

		return res.status(200).json({ success: 'User, profile and posts deleted' })
	}

	async getUserProfile(req, res) {
		const profile = await Profile.findOne({
			user: req.userId,
		}).populate('user', ['name', 'avatar'])

		if (!profile) {
			return res.status(404).json({ error: 'Profile not found' })
		}

		return res.status(200).json(profile)
	}

	async storeExperience(req, res) {
		const {
			title,
			company,
			location,
			from,
			to,
			current,
			description,
		} = req.body

		const profile = await Profile.findOne({ user: req.userId })

		if (!profile) {
			return res.status(404).json({ error: 'Profile not found' })
		}

		profile.experience.unshift({
			title,
			company,
			location,
			from,
			to,
			current,
			description,
		})

		await profile.save()

		return res.status(200).json(profile)
	}

	async destroyExperience(req, res) {
		const profile = await Profile.findOne({ user: req.userId })

		if (!profile) {
			return res.status(404).json({ error: 'Profile not found' })
		}

		const indexToRemove = profile.experience
			.map(experience => experience.id)
			.indexOf(req.params.id)

		if (indexToRemove === -1 || indexToRemove === null) {
			return res.status(404).json({ error: 'Experience not found' })
		}

		profile.experience.splice(indexToRemove, 1)
		await profile.save()

		return res.status(200).json({ success: 'Experience deleted successfully' })
	}

	async storeEducation(req, res) {
		const {
			school,
			degree,
			fieldofstudy,
			from,
			to,
			current,
			description,
		} = req.body

		const profile = await Profile.findOne({ user: req.userId })

		if (!profile) {
			return res.status(404).json({ error: 'Profile not found' })
		}

		profile.education.unshift({
			school,
			degree,
			fieldofstudy,
			from,
			to,
			current,
			description,
		})

		await profile.save()

		return res.status(200).json(profile)
	}

	async destroyEducation(req, res) {
		const profile = await Profile.findOne({ user: req.userId })

		if (!profile) {
			return res.status(404).json({ error: 'Profile not found' })
		}

		const indexToRemove = profile.education
			.map(education => education.id)
			.indexOf(req.params.id)

		if (indexToRemove === -1 || indexToRemove === null) {
			return res.status(404).json({ error: 'Education not found' })
		}

		profile.education.splice(indexToRemove, 1)
		await profile.save()

		return res.status(200).json({ success: 'Education deleted successfully' })
	}

	async getUserRepos(req, res) {
		const { username } = req.params
		const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = process.env

		const { data } = await axios.get(
			`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_CLIENT_SECRET}`
		)

		return res.status(200).json(data)
	}
}

export default new ProfileController()
