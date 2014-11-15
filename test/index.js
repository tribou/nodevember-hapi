var Code = require('code');
var Hapi = require('hapi');
var Lab = require('lab');
var Routes = require('../lib/routes');


// Declare shortcuts

var lab = exports.lab = Lab.script();
var describe = lab.describe;
var it = lab.it;
var expect = Code.expect;

describe('hello', function() {

    it('replies with hello server', function(done) {

        var server = new Hapi.Server();
        server.route(Routes);

        server.inject({ method: 'GET', url: '/'}, function(res) {

            expect(res.result).to.equal('Hello Server');
            done();
        })
    })
});
