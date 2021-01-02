const addressess = require('./handlers/addresses')

module.exports = [
{
    method: 'GET',
    path: '/api/v1/calindra',
    handler: addressess.getAll,    
}
]