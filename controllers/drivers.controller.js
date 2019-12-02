const Driver = require('../models/Driver')

const getDrivers = async (req, res) => {
  try {
    const driversList = await Driver.find()
    res.status(200).json(driversList)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

const getDriverById = async (req, res) => {
  try {
    const { id } = req.params
    const driver = await Driver.findById(id)

    res.status(200).json(driver)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

const addDriver = async (req, res) => {
  try {
    const { body } = req
    const newDriver = new Driver(body)

    const driver = await newDriver.save()
    res.status(201).json(driver)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

const editDriver = async (req, res) => {
  try {
    const { id } = req.params
    const { body } = req

    const driver = await Driver.findByIdAndUpdate(id, body)
    res.status(400).json(driver)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

const deleteDriver = async (req, res) => {
  try {
    const { id } = req.params

    const driver = await Driver.findByIdAndDelete(id)
    res.status(200).json(driver)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

module.exports = {
  getDrivers,
  getDriverById,
  addDriver,
  editDriver,
  deleteDriver,
}
