import { NextFunction, Request, Response } from 'express'

import { Validator } from '@utils/contracts'

namespace ExpressValidatorAdapter {
	export type Return = (
		req: Request,
		res: Response,
		next: NextFunction
	) => Promise<Response | void>
}

export class ExpressValidatorAdapter {
	static adapt(validator: Validator): ExpressValidatorAdapter.Return {
		return async (req: Request, res: Response, next: NextFunction) => {
			try {
				await validator.validate(req.body)

				return next()
			} catch (err) {
				return res.status(400).json(err.message)
			}
		}
	}
}
