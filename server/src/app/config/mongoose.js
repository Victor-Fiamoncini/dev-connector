import { connect } from 'mongoose'

export default async () => {
	try {
		const { DB_NAME, DB_PORT, DB_HOST } = process.env

		await connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false,
		})

		console.log('Connected to mongodb')
	} catch (err) {
		console.log('Error to connect mongodb')
	}
}
