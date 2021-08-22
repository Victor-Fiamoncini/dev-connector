import { NextFunction, Request, Response } from 'express'
import { AuthenticationMiddleware } from 'utils/contracts'

namespace ExpressAuthenticationMiddlewareAdapter {
	export type Return = (
		req: Request,
		res: Response,
		next: NextFunction
	) => Promise<Response | void>
}

export class ExpressAuthenticationMiddlewareAdapter {
	static adapt(
		authenticationMiddleware: AuthenticationMiddleware
	): ExpressAuthenticationMiddlewareAdapter.Return {
		return async (req: Request, res: Response, next: NextFunction) => {
			try {
				const verifiedToken = await authenticationMiddleware.handle(
					String(req.headers.authorization)
				)

				req.authPayload = verifiedToken

				return next()
			} catch (err) {
				return res.status(401).json(err.message)
			}
		}
	}
}
