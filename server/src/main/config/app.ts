import express from 'express'
import setupRoutes from '@main/config/routes'
import { MongoConnection } from '@infra/databases'

async function databases() {
	await MongoConnection.instance.open()
}

const app = express()

databases()
setupRoutes(app)

export default app
