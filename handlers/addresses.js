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


const getAll = async (request, h) => {
    const result = await calculaRota(request.query.endereco1, request.query.endereco2);
    const distancia = await calculaDistancia(result)
    console.log(distancia)
    return 'Oi temporário'
}



module.exports = {
    getAll
}