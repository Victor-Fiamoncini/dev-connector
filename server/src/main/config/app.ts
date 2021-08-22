import compression from 'compression'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'

import setupDatabases from '@main/config/databases'
import setupRoutes from '@main/config/routes'

const app = express()

app.use(express.json())
app.use(compression())
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))

setupDatabases()
setupRoutes(app)

export default app
