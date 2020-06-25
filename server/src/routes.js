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

export default router
