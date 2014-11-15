var Hapi = require('hapi');

var server = new Hapi.Server('localhost', 8080);

server.route({
    method: 'GET',
    path: '/hello',
    handler: function(request, reply) {
        reply('server');
    }
});

server.start(function() {

    console.log("Server started...");
});
