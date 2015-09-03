var Hapi = require('hapi');
var Swig = require('swig');
var handlerbars = require('handlebars');
var Good = require('good');

var server = new Hapi.Server({ debug: { request: ['error'] } });
server.connection({ port: 3000, host: 'localhost' });

var routes = require('./routes');
server.route(routes);


server.register(
    require('vision'), function (err) {
        if (err) {
            throw err;
        }
        server.views({
            engines: {
                html: handlerbars
            },
            relativeTo: __dirname,
            path: 'templates'
        });

        server.route({
            method: 'GET',
            path: '/',
            handler: function (request, reply) {
                reply.view('index');
            }
        });
});

server.register(
    {
    register: Good,
    options: {
        reporters: [{
            reporter: require('good-console'),
            events: {
                response: '*',
                log: '*'
            }
        }]
    }
    }, function (err) {
    if (err) {
        throw err; // something bad happened loading the plugin
    }

});

var blocked = require('blocked');

setInterval(function(){
    Array(1000).join('a')
}, 500);

setInterval(function(){
  Array(1000).join('a')
}, 3000);

blocked(function(ms){
  console.log('BLOCKED FOR %sms', ms | 0);
});

server.start(function(){
    console.log("server is starting..");
});