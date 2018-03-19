import express from 'express'
import log from '../services/log'
import deviceService from '../services/device'

const router = new express.Router()

router.post('/', addDevice)
router.get('/', listDevices)

async function addDevice(req, response) {
	console.log(req.body)
	let result = await deviceService.create(req.body)

	response.json({
		success: result != undefined ? true : false,
		deviceID: result
	})
}

async function listDevices(req, response) {
	let result = await deviceService.list()

	response.json({
		success: result != undefined ? true : false,
		winners: result
	})
}

export default {
	router
}
