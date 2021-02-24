import Youch from 'youch'

export default async (err, req, res, next) => {
	if (process.env.NODE_ENV === 'development') {
		const errors = await new Youch(err, req).toHTML()

		return res
			.status(500)
			.writeHead(200, { 'content-type': 'text/html' })
			.write(errors)
	}

	return res.status(500).json({ error: 'Internal server error' })
}
