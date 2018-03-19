import winston from 'winston'
import expressWinston from 'express-winston'
import colors from 'colors/safe'
import config from '../../config'

const transports = [
	new winston.transports.Console({
		colorize: true,
		timestamp: true,
		level: config.logLevel
	})
]

var logger = new (winston.Logger)({
	transports: transports
})

var middleware = expressWinston.logger({ 
	transports: transports,
	meta: true
})

function format(args) {
	if(args.length > 1) {
		args[0] = colors.red.bold(args[0]) + colors.white.bold(':')
	}

	return args
}

// Wrapping the logger to provide formatting for a 'context' argument
// e.g. log.debug('class.function', 'blew up for reasons and stuff')
const log = {
	logger,
	middleware,
	error: (...args) => logger.error(...format(args)),
	warn: (...args) => logger.warn(...format(args)),
	info: (...args) => logger.info(...format(args)),
	verbose: (...args) => logger.verbose(...format(args)),
	debug: (...args) => logger.debug(...format(args)),
	silly: (...args) => logger.silly(...format(args))
}



export default log
