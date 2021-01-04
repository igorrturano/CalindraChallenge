const { Client } = require('@googlemaps/google-maps-services-js')
require('dotenv').config()
const chave = process.env.API_KEY
const client = new Client({});


async function calculaRota(enderecos) {
  const enderecosReq = enderecos.map(endereco => client.geocode({
    params: { 
      address: endereco,
      key: chave
    }
   })
  );
  const result = await Promise.all(enderecosReq)
  console.log(result[0].data.results);
  return result.map(res => ({ address: res.data.results[0].formatted_address, location: res.data.results[0].geometry.location }) )
};

  function calculaDistancia(enderecos) {
    const resultado1 = enderecos[0].lat - enderecos[1].lat
    const resultado2 = enderecos[0].lng - enderecos[1].lng

    const quadradoUm = Math.pow(resultado1, 2)
    const quadradoDois = Math.pow(resultado2, 2)
    const soma = quadradoUm + quadradoDois

    return {
      distancia: Math.sqrt(soma),
      enderecos
    }
}


// console.log(calculaDistancia(calculaRota('rua barao de mesquita 222 tijuca rj', 'rua conde de bonfim 222 tijuca rj')));

module.exports = {
    client,
    calculaRota,
    calculaDistancia
}