import { Post, User } from '../models'

class PostController {
	async index(req, res) {
		const posts = await Post.find().sort({ date: -1 })

		if (!posts) {
			return res.status(404).json({ error: 'Posts not found' })
		}

		return res.status(200).json(posts)
	}

	async show(req, res) {
		const post = await Post.findById(req.params.id)

		if (!post) {
			return res.status(404).json({ error: 'Post not found' })
		}

		return res.status(200).json(post)
	}

	async store(req, res) {
		const user = await User.findById(req.userId).select('-password')

		if (!user) {
			return res.status(401).json({ error: 'Unauthorized' })
		}

		const post = new Post({
			text: req.body.text,
			name: user.name,
			avatar: user.avatar,
			user: req.userId,
		})

		await post.save()

		return res.status(201).json(post)
	}

	async destroy(req, res) {
		const post = await Post.findById(req.params.id)

		if (!post) {
			return res.status(404).json({ error: 'Post not found' })
		}

		if (String(post.user) !== req.userId) {
			return res.status(401).json({ error: 'Unauthorized' })
		}

		await post.remove()

		return res.status(200).json({ success: 'Post deleted successfully' })
	}
}

export default new PostController()
