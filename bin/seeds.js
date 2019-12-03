const mongoose = require('mongoose')
const Driver = require('../models/Driver')

mongoose
  .connect('mongodb://localhost/truckpad-challenge', { useNewUrlParser: true })
  .then(() => console.log('connected to mongo database'))

const drivers = [
  {
    name: 'teste',
    state: 'São Paulo',
    city: 'São Paulo',
    phone: '2158485260',
    address: {
      state: 'São Paulo',
      country: 'Brasil',
      neighborhood: 'Mirandópolis',
      city: 'São Paulo',
      streetNumber: '1000',
      streetName: 'Avenida Brasil',
    },
    documents: [
      {
        country: 'São Paulo',
        number: '0000000000',
        docType: 'CNH',
        category: 'A',
      },
      {
        country: 'Brasil',
        number: '23584851562',
        docType: 'CPF',
      },
    ],
  },
]

Driver.insertMany(drivers).then(() => {
  console.log('drivers inserted')
  mongoose.connection.close()
})
