const express = require('express')

const {
  getDrivers,
  getDriverById,
  addDriver,
  editDriver,
  deleteDriver,
} = require('../controllers/drivers.controller')

const router = express.Router()

router.get('/', getDrivers)

router.get('/:id', getDriverById)

router.post('/new-driver', addDriver)

router.put('/:id', editDriver)

router.delete('/:id', deleteDriver)

module.exports = router
