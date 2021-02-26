import { connect, Mongoose } from 'mongoose'

export class MongoConnection {
	private connection: Mongoose
	private static _instance: MongoConnection

	static get instance(): MongoConnection {
		if (!MongoConnection._instance) {
			MongoConnection._instance = new MongoConnection()
		}

		return MongoConnection._instance
	}

	get conn(): Mongoose {
		return this.connection
	}

	async open(): Promise<void> {
		try {
			const {
				MONGO_NAME,
				MONGO_PORT,
				MONGO_HOST,
				MONGO_USER,
				MONGO_PASS,
			} = process.env

			const url = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_NAME}`

			this.connection = await connect(url, {
				auth: {
					user: MONGO_USER as string,
					password: MONGO_PASS as string,
				},
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useCreateIndex: true,
				useFindAndModify: false,
			})
		} catch (err) {
			throw new Error(err.stack)
		}
	}

	async close(): Promise<void> {
		try {
			await this.connection.disconnect()
		} catch (err) {
			throw new Error(err.stack)
		}
	}
}
