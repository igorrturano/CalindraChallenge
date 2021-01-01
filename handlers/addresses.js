const transformer = address => ({
    type: 'address',
    id: adress.id,
    attributes: {
        name: address.name,
        price: address.price,
    },
    links: {
        self: `/api/v1/adress/${address.id}`
    }
})


const getAll = async (request, h) => {
    console.log(request.query)
    return { data: address.map(transformer)}
}

module.exports = {
    getAll
}