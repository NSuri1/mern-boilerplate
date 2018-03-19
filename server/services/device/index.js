import Device from './model'

async function create(id) {
	let deviceID = await Device.create(id).catch((err) => console.err(err))
	return deviceID
}

async function list() {
	let listOfDevices = await Device.find({})
	return listOfDevices
}

async function nuke() {
	let success = Device.remove({})
	return success
}

export default {
	create, 
	list,
	nuke
}
