import express from 'express'
import log from '../services/log'
import deviceService from '../services/device'

const router = new express.Router()

router.delete('/nuke/devices', nukeDevices)

async function nukeDevices(req, response) {
	let result = await deviceService.nuke()

	response.json({
		success: result != undefined ? true : false
	})
}

export default {
	router
}
