const { Client } = require('@googlemaps/google-maps-services-js')
require('dotenv').config()
const chave = process.env.API_KEY
const client = new Client({});


async function getCoordinates(addresses) {
  const addressesReq = addresses.map(addresses => client.geocode({
    params: { 
      address: addresses,
      key: chave
    }
   })
  );
  const result = await Promise.all(addressesReq)
  // console.log(result[0].data.results);
  return result.map(res => ({ address: res.data.results[0].formatted_address, location: res.data.results[0].geometry.location }) )
};

function calculateEuclideanDistance(addresses) {
  const latitudeSquare  = Math.pow(addresses[0].location.lat - addresses[1].location.lat, 2)
  const longitudeSquare = Math.pow(addresses[0].location.lng - addresses[1].location.lng, 2)
  const sum = latitudeSquare  + longitudeSquare

  return {
    distance: Math.sqrt(sum),
    addresses: [ addresses[0].address, addresses[1].address ]
  }
}

module.exports = {
    client,
    getCoordinates,
    calculateEuclideanDistance
}