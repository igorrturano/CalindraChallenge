const { getCoordinates } = require('../api/googleservicemap')

function calculateEuclideanDistance(addresses) { 
  const latitudeSquare  = Math.pow(addresses[0].location.lat - addresses[1].location.lat, 2) 
  const longitudeSquare = Math.pow(addresses[0].location.lng - addresses[1].location.lng, 2)
  const sum = latitudeSquare  + longitudeSquare
  return {
    distance: Math.sqrt(sum),
    addresses: [ addresses[0].address, addresses[1].address ]
  }
}

function calculateDistances(addresses) {
    const addressDistance = [];
    for (let i = 0; i < addresses.length; i++){ 
      for (let j = i+1; j < addresses.length; j++) {
        addressDistance.push(calculateEuclideanDistance([addresses[i], addresses[j]])) 
     
      }
    }
    return addressDistance;
  }

  const getAll = async (request, h) => { 
    const result = await getCoordinates(request.query.endereco) 
    const allDistances = calculateDistances(result) 
    const distanceSortedByProximity = allDistances.sort((firstAddress, secondAddress) => {
      if (firstAddress.distance > secondAddress.distance) { 
        return 1;
      } else if (firstAddress.distance < secondAddress.distance) {
        return -1;
      } else {
        return 0; 
      }
    })
    return distanceSortedByProximity 
}

module.exports = { 
    getAll,
    calculateDistances,
    calculateEuclideanDistance
}