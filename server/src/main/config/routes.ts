import { Application, Router } from 'express'
import { readdirSync } from 'fs'

function setupRoutes(app: Application): void {
	const router = Router()

	app.use(router)

	readdirSync(`${__dirname}/../routes`).map(async fileName => {
		const importedRouteFile = await import(`../routes/${fileName}`)

		importedRouteFile.default(router)
	})
}

export default setupRoutes
