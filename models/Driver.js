const mongoose = require('mongoose')

const { Schema } = mongoose

const DriverSchema = new Schema(
  {
    name: String,
    birthDate: Date,
    state: String,
    city: String,
    phone: Number,
    address: {
      streetName: String,
      postalCode: Number,
      complement: String,
      streetNumber: Number,
      city: String,
      neighborhood: String,
      country: String,
      state: String,
    },
    documents: [
      {
        country: String,
        number: String,
        docType: String,
        expiresAt: Date,
        category: String,
      },
      {
        country: String,
        number: String,
        docType: String,
      },
    ],
  },
  {
    timestamps: true,
  },
)

const Driver = mongoose.model('Driver', DriverSchema)

module.exports = Driver
