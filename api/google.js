const { Client } = require('@googlemaps/google-maps-services-js')

const client = new Client({});

function calculaRota([]) {

    client.geocode({params: {
        address: ``,
        key: "AIzaSyDH2qt1gM2kd9t81boc9efnVJrQOEqGtB8"
        
    }}).then((response)=> {console.log(response.data.results[0].geometry.location)}).catch(console.log)

}


module.exports = {
    client
}