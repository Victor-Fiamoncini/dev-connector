import { MongoConnection } from '@infra/databases'

const setupDatabases = async (): Promise<void> => {
	await MongoConnection.instance.open()
}

export default setupDatabases
