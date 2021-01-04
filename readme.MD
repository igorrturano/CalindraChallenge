# Calindra Challenge Backend

O desafio consiste em consumir uma api de geocode do google maps e retornar as distâncias dos endereços inseridos.


## Como Rodar

Utilizei o hapi para subir o localhost e o google-maps-service para consumir a api,
O dotenv para subir a chave secretamente para o GitHub e o config para acessar o arquivo.

```
- npm install @hapi/hapi
- npm install @googlemaps/google-maps-services-js
- npm install dotenv
- npm install config
```

Para conseguir rodar o código, você precisa ter uma [chave](https://www.google.com) do google.

Substitua o valor do API_KEY, pela sua chave renomeando o arquivo `.sample.env` para `.env` apenas.

## Exemplos de uso

Você também poderá adquirir um GET via Curl:
```
- curl http://localhost:3000/api/v1/address?endereco=Florianopolis Santa Catarina&endereco=Macapá Amapa&endereco=Salvador Bahia&endereco=Rio de Janeiro RJ
```
### ou

 via **Postman/Insomnia** passando nos *Params* a chave `endereco` e o valor a localização. Por exemplo:

![exemplo com Postman](https://imgur.com/FtMbXsw.jpg)


> Os endereços serão ordenados por distância crescente, endereços
> próximos serão mostrados primeiro e endereços distantes, por último.

## Dependências

- Node: v14.15.1
- Hapi: v20.0.3
- dotenv: v8.2.0
- config: v3.3.3
