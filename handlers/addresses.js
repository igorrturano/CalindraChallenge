const { getCoordinates, calculateEuclideanDistance } = require('../api/google')

const transformer = address => ({
    type: 'address',
    id: address.id,
    attributes: {
        name: address.name,
    },
    links: {
        self: `/api/v1/address/${address.id}`
    }
})

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
    const allDistances = await calculateDistances(result)
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
    getAll
}