import { Controller } from '@presentation/contracts'
import { Request, Response } from 'express'

export class ExpressAttributeRouterAdapter {
	static adapt(controller: Controller, attribute: string) {
		return async (req: Request, res: Response): Promise<Response> => {
			// const reqAttribute = req.get(attribute)
			const reqAttribute = req[attribute]

			console.log({ reqAttribute })

			const httpResponse = await controller.handle({ body: reqAttribute })

			return res.status(httpResponse.statusCode).json(httpResponse.data)
		}
	}
}
