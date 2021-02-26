import { connect, Mongoose } from 'mongoose'

export class MongoConnectionHandler {
	private connection: Mongoose

	public get conn(): Mongoose {
		return this.connection
	}

	async open(): Promise<void> {
		try {
			const { DB_NAME, DB_PORT, DB_HOST } = process.env

			this.connection = await connect(
				`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`,
				{
					useNewUrlParser: true,
					useUnifiedTopology: true,
					useCreateIndex: true,
					useFindAndModify: false,
				}
			)
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
