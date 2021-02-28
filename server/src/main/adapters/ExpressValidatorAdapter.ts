import { Validator } from 'utils/contracts'
import { NextFunction, Request, Response } from 'express'

namespace ExpressValidatorAdapter {
	export type Return = (
		req: Request,
		res: Response,
		next: NextFunction
	) => Promise<void>
}

export class ExpressValidatorAdapter {
	static handleValidation(
		validator: Validator
	): ExpressValidatorAdapter.Return {
		return async (
			req: Request,
			res: Response,
			next: NextFunction
		): Promise<void> => {
			await validator.validate(req.body)

			return next()
		}
	}
}
