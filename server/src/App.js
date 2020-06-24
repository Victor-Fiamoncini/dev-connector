import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'

import mongo from './app/config/mongoose'
import routes from './routes'
import { error } from './app/middlewares'

export default class App {
	constructor() {
		this.express = express()

		this.configs()
		this.database()
		this.middlewares()
		this.routes()
	}

	get app() {
		return this.express
	}

	configs() {
		this.express.disable('x-powered-by')
	}

	async database() {
		await mongo()
	}

	middlewares() {
		const { CLIENT_HOST, NODE_ENV } = process.env

		if (NODE_ENV === 'production') {
			this.express.use(cors({ origin: CLIENT_HOST }))
		} else if (NODE_ENV === 'development' || NODE_ENV === 'test') {
			this.express.use(cors({ origin: '*' }))
		}

		this.express.use(helmet())
		this.express.use(express.json())
		this.express.use(morgan('dev'))
	}

	routes() {
		this.express.use(routes)
		this.express.use(error)
	}
}
