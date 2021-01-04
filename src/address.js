const addressess = require('./handlers/addresses')

module.exports = [
{
    method: 'GET',
    path: '/api/v1/address',
    handler: addressess.getAll,    
}
]