export type HttpResponse<T = unknown> = {
	statusCode: number
	data: T
}
export namespace HttpResponse {
	export const serverError = (err: Error): HttpResponse<any> => ({
		statusCode: 500,
		data: err.message,
	})

	export const clientError = (err: Error): HttpResponse<any> => ({
		statusCode: 400,
		data: err.message,
	})

	export const unauthorizedError = (err: Error): HttpResponse<any> => ({
		statusCode: 403,
		data: err.message,
	})

	export const ok = (data: unknown): HttpResponse<any> => ({
		statusCode: 200,
		data,
	})

	export const created = (data: unknown): HttpResponse<any> => ({
		statusCode: 201,
		data,
	})
}
