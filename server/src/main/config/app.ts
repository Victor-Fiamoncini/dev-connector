import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'
import setupRoutes from '@main/config/routes'
import setupDatabases from '@main/config/databases'

const app = express()

app.use(express.json())
app.use(compression())
app.use(cors())
app.use(helmet())

setupDatabases()
setupRoutes(app)

export default app
