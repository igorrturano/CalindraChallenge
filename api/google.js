const { Client } = require('@googlemaps/google-maps-services-js')

const client = new Client({});

async function calculaRota(...enderecos) {
    const enderecosReq = enderecos.map(endereco => client.geocode({
      params: { 
        address: endereco,
        key: "AIzaSyDH2qt1gM2kd9t81boc9efnVJrQOEqGtB8"
      }
     })
    );
    const result = await Promise.all(enderecosReq)
    return result.map(res => res.data.results[0].geometry.location)
  };



function calculaDistancia(enderecos) {
    resultado1 = enderecos[0].lat - enderecos[1].lat
    resultado2 = enderecos[0].lng - enderecos[1].lng

    let quadradoUm = Math.pow(resultado1, 2)
    let quadradoDois = Math.pow(resultado2, 2)
    let soma = quadradoUm + quadradoDois

    return Math.sqrt(soma)
}


// console.log(calculaDistancia(calculaRota('rua barao de mesquita 222 tijuca rj', 'rua conde de bonfim 222 tijuca rj')));

module.exports = {
    client,
    calculaRota,
    calculaDistancia
}