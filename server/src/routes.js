import { Router } from 'express'

import * as controllers from './app/controllers'
import * as middlewares from './app/middlewares'
import * as validators from './app/validators'

const router = Router()

/**
 * Public sessions
 */
router.post(
	'/sessions',
	validators.SessionValidator.store,
	middlewares.async(controllers.SessionController.store)
)
router.get(
	'/sessions',
	middlewares.auth,
	middlewares.async(controllers.SessionController.refresh)
)

/**
 * Public users
 */
router.post(
	'/users',
	validators.UserValidator.store,
	middlewares.async(controllers.UserController.store)
)

/**
 * Private routes
 */
router.use(middlewares.auth)

/**
 * Private profiles
 */
router.get(
	'/profiles/me',
	middlewares.async(controllers.ProfileController.show)
)
router.post(
	'/profiles',
	validators.ProfileValidator.updateOrStore,
	middlewares.async(controllers.ProfileController.store)
)

export default router
