# Calindra Challenge Backend

O desafio consiste em consumir uma api de geocode do google maps e retornar as distâncias dos endereços inseridos.


## Como Rodar

```
- npm install
- npm start
```

Para conseguir rodar o código, você precisa ter uma [chave](https://www.google.com) do google.

Substitua o valor do API_KEY, pela sua chave renomeando o arquivo `.sample.env` para `.env` apenas.

## Exemplos de uso

Você também poderá adquirir um GET via Curl:
```
curl --location --request GET 'http://localhost:3000/api/v1/address?endereco=Florianopolis%20Santa%20Catarina&endereco=Macap%C3%A1%20Amapa&endereco=Salvador%20Bahia&endereco=Rio%20de%20Janeiro%20RJ'
```
### ou

 via **Postman/Insomnia** passando nos *Params* a chave `endereco` e o valor a localização. Por exemplo:

![exemplo com Postman](https://imgur.com/FtMbXsw.jpg)


> Os endereços serão ordenados por distância crescente, endereços
> próximos serão mostrados primeiro e endereços distantes, por último.

## Dependências

- Node: v14.15.1
