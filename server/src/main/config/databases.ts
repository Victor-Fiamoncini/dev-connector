import { MongoConnection } from '@infra/databases'

import env from '@main/config/env'

const setupDatabases = async (): Promise<void> => {
	await MongoConnection.getInstance(
		String(env.mongo.host),
		String(env.mongo.port),
		String(env.mongo.name)
	).open()
}

export default setupDatabases
