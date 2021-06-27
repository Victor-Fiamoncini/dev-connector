import {
	ExpressAuthenticationMiddlewareAdapter,
	ExpressBodyRouterAdapter,
	ExpressValidatorAdapter,
} from '@main/adapters'
import {
	CreatePostControllerFactory,
	TokenValidateAuthenticationMiddlewareFactory,
} from '@main/factories'
import { CreatePostValidator } from '@utils/validators'
import { Router } from 'express'

const postRoutes = (router: Router): void => {
	router.post(
		'/posts',
		ExpressValidatorAdapter.adapt(new CreatePostValidator()),
		ExpressAuthenticationMiddlewareAdapter.adapt(
			TokenValidateAuthenticationMiddlewareFactory.make()
		),
		ExpressBodyRouterAdapter.adapt(CreatePostControllerFactory.make())
	)
}

export default postRoutes
