import express from 'express'
import admin from './admin'
import devices from './devices'

const router = new express.Router({
	mergeParams: true,
})

router.use('/admin', admin.router)
router.use('/devices', devices.router)

router.all('*', (req, res) => {
	res.status(400).json({
		error: 'invalid resource'
	})
})

export default router
