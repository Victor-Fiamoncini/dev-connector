import { config } from 'dotenv'
import { resolve } from 'path'

config({ path: resolve(__dirname, '..', '..', '..', '.env') })

export default {
	port: process.env.PORT || 3333,
	mongo: {
		host: process.env.MONGO_HOST,
		port: process.env.MONGO_PORT,
		name: process.env.MONGO_NAME,
		user: process.env.MONGO_USER,
		password: process.env.MONGO_PASS,
	},
	jwt: {
		expires: process.env.JWT_EXPIRES || '24h',
		secret: process.env.JWT_AUTH_SECRET || 'dev_secret',
	},
}
