const Hapi = require('@hapi/hapi');
const address = require('./address')

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route(address)

    await server.start();
    console.log('Server Running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();