const { calculaRota, calculaDistancia } = require('../api/google')

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

function comparaEnderecos (enderecos) {
    const enderecosAlready = [];
    for (let i = 0; i < enderecos.length; i++){
      for (let j = i+1; j < enderecos.length; j++) {
          enderecosAlready.push(calculaDistancia([enderecos[i], enderecos[j]]))
      }
    }
    return Promise.all(enderecosAlready);
  }

  const getAll = async (request, h) => {
    console.log(request.query)
    const result = await calculaRota(request.query.endereco)
    const todasDistancias = await comparaEnderecos(result)
    console.log(todasDistancias)
    return todasDistancias
}



module.exports = {
    getAll
}