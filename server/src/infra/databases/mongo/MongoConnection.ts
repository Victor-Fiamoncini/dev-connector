import { connect, Mongoose } from 'mongoose'
import env from '@main/config/env'

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
		const { mongo } = env

		const url = `mongodb://${mongo.host}:${mongo.port}/${mongo.name}`

		try {
			this.connection = await connect(url, {
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
