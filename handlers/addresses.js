const { calculaRota, calculaDistancia } = require('../api/google')
const { values } = require('../routes')

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


const getAll = async (request, h) => {
   var enderecos = await Promise.all([request.query])
    .then((endereco) => {
        console.log(endereco)
    })
    const result = await calculaRota(enderecos);
    const distancia = await calculaDistancia(result)
    console.log(distancia)
    return 'Oi temporário'
}



module.exports = {
    getAll
}