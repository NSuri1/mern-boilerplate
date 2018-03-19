import mongoose from 'mongoose'
import timestamps from 'mongoose-timestamp'
import log from './log'

mongoose.Promise = global.Promise

mongoose.plugin(timestamps)

function defaultOnError(err) {
	log.error('db.onError', `Mongo connection failed: ${err}`)
	process.exit(1)
}

function connect(uri, onError = defaultOnError) {
	mongoose.connection.on('error', onError)
	return mongoose.connect(uri)
		.then(() => {
			log.info('db.connect', `connected to ${mongoose.connection.host}:${mongoose.connection.port}/${mongoose.connection.db.databaseName}`)
		})
}

export default {
	connect
}
