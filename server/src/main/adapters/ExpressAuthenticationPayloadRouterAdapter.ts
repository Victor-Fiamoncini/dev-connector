import { Controller } from '@presentation/contracts'
import { Request, Response } from 'express'

export class ExpressAuthenticationPayloadRouterAdapter {
	static adapt(controller: Controller) {
		return async (req: Request, res: Response): Promise<Response> => {
			const httpResponse = await controller.handle({ body: req.authPayload })

			return res.status(httpResponse.statusCode).json(httpResponse.data)
		}
	}
}
