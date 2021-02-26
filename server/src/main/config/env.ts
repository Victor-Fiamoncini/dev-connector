import { config } from 'dotenv'
import { resolve } from 'path'

config({ path: resolve(__dirname, '..', '..', '..', '.env') })

export default {
	port: process.env.PORT || 3333,
}
