const Hapi = require('@hapi/hapi');
const routes = require('./routes')
const apiGeocode = require('./api/google')

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route(routes)

    await server.start();
    console.log('Server Running on %s', server.info.uri);
};

process.on('unhandleRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
