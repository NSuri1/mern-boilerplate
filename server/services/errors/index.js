import _ from 'lodash'
import log from '../log'

// Error handler
function errorHandler(err, req, res, next) {
	log.error('Global error handler', err)
	res.status(err.status || 500).json({ error: err.message || err.name || 'Internal Server Error' })
}

const errorTypes = [
	{ name: 'Unauthorized', status: 401 },
	{ name: 'NotFound', status: 404 },
	{ name: 'BadRequest', status: 400 },
	{ name: 'Internal', status: 500, message: 'Internal Server Error'}
]

function createError(type, details) {
	let err = _.clone(type)
	err.details = details
	return err
}

let errors = _.reduce(errorTypes, (acc, et) => {
	acc[et.name] = (details) => createError(et, details)
	return acc
}, {})

export { errorHandler }

export default errors
