import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    deviceID: {
		type: String,
		required: true
	}
})

export default mongoose.model('Device', schema)
