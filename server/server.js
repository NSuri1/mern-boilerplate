import express from 'express'
import path from 'path'
import cors from 'cors'
import bodyParser from 'body-parser'

import db from './services/db'
import log from './services/log'
import config from './config'
import api from './api'
import { errorHandler } from './services/errors'

let app = express()

app.use(log.middleware)
app.use(cors())
app.use(bodyParser.urlencoded({
	limit: '5mb',
	extended: true
}))
app.use(bodyParser.json({
	limit: '5mb'
}))

app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));

// API
app.use(`/api`, api)

// Global error handling
app.use(errorHandler)

// Seed and start
db.connect(config.mongo)
	.then(() => app.listen(config.port, () => {
		log.info('server.startup', 'Application started')
		log.info('server.startup', `Mode: ${config.env}`)
		log.info('server.startup', `Port: ${config.port}`)
	}))
