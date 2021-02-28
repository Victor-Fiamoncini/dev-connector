import { UnexpectedError } from '@utils/errors'
import { connect } from 'mongoose'

export class MongoConnection {
	private static _instance: MongoConnection

	private constructor(
		private readonly host: string,
		private readonly port: string,
		private readonly name: string
	) {}

	static getInstance(
		host: string,
		port: string,
		name: string
	): MongoConnection {
		if (!MongoConnection._instance) {
			MongoConnection._instance = new MongoConnection(host, port, name)
		}

		return MongoConnection._instance
	}

	async open(): Promise<void> {
		const url = `mongodb://${this.host}:${this.port}/${this.name}`

		try {
			await connect(url, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useCreateIndex: true,
				useFindAndModify: false,
			})
		} catch (err) {
			throw new UnexpectedError(err.message)
		}
	}
}
