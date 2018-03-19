module.exports = {
	env: process.env.NODE_ENV || 'development',
	version: process.env.VERSION || '1',
	port: process.env.PORT || 5000,
	resetData: process.env.RESET_DATA || false,
	logLevel: process.env.LOG_LEVEL || 'debug',
	auth: {
		token: {
			expiry: process.env.AUTH_TOKEN_EXPIRY || '7d',
			secret: process.env.AUTH_TOKEN_SECRET || 'neato.!.!.'
		}
	},
	mongo: process.env.MONGO_URL || 'mongodb://localhost:27017/devices',
}
