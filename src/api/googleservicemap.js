require('dotenv').config() 
const { Client } = require('@googlemaps/google-maps-services-js')
const key = process.env.API_KEY
const client = new Client({});


async function getCoordinates(addresses) {
  const addressesReq = addresses.map(address => client.geocode({
    params: { 
      address,
      key
    }
   })
  );
  const result = await Promise.all(addressesReq)
  return result.map(res => ({ address: res.data.results[0].formatted_address, location: res.data.results[0].geometry.location }) )
};


module.exports = {
    getCoordinates
}