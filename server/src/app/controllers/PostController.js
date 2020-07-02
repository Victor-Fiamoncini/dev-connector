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

	async like(req, res) {
		const post = await Post.findById(req.params.id)

		if (!post) {
			return res.status(404).json({ error: 'Post not found' })
		}

		const hasBeenLiked =
			post.likes.filter(like => String(like.user) === req.userId).length > 0

		if (hasBeenLiked) {
			return res.status(400).json({ error: 'Post has already been liked' })
		}

		post.likes.unshift({ user: req.userId })

		await post.save()
		return res.status(200).json(post.likes)
	}

	async unlike(req, res) {
		const post = await Post.findById(req.params.id)

		if (!post) {
			return res.status(404).json({ error: 'Post not found' })
		}

		const hasNotBeenLiked =
			post.likes.filter(like => String(like.user) === req.userId).length === 0

		if (hasNotBeenLiked) {
			return res.status(400).json({ error: 'Post has not been liked' })
		}

		const indexToRemove = post.likes
			.map(like => String(like.user))
			.indexOf(req.userId)

		post.likes.splice(indexToRemove, 1)
		await post.save()

		return res.status(200).json(post.likes)
	}

	async comment(req, res) {
		const post = await Post.findById(req.params.id)

		if (!post) {
			return res.status(404).json({ error: 'Post not found' })
		}

		const user = await User.findById(req.userId).select('-password')

		if (!user) {
			return res.status(401).json({ error: 'Unauthorized' })
		}

		post.comments.unshift({
			text: req.body.text,
			name: user.name,
			avatar: user.avatar,
			user: req.userId,
		})

		await post.save()
		return res.status(201).json(post.comments)
	}

	async destroyComment(req, res) {
		const { id, comment_id } = req.params

		const post = await Post.findById(id)

		if (!post) {
			return res.status(404).json({ error: 'Post not found' })
		}

		const comment = post.comments.find(comment => comment.id === comment_id)

		if (!comment) {
			return res.status(404).json({ error: 'Comment not found' })
		}

		if (String(comment.user) !== req.userId) {
			return res.status(401).json({ error: 'Unauthorized' })
		}

		const indexToRemove = post.comments
			.map(comment => String(comment.user))
			.indexOf(req.userId)

		post.comments.splice(indexToRemove, 1)

		await post.save()
		return res.status(200).json(post.comments)
	}
}

export default new PostController()
