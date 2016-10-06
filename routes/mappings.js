'use strict';
const express = require('express');
const router = express.Router();
const Credstash = require('credstash');
const async = require('async');
const credstash = new Credstash();

/* GET mapping by cname */
router.get('/:cname', function(req, res, next) {

    var cname = req.params.cname;

    if (!cname) {
        res.json({ statusCode: 400, body: {} }).end();
    }

    console.log('get mapping by cname: ' + cname);

    var credstashKey = 'cname-tenant-cert:' + cname;

    credstash.get(credstashKey, function(e, secret) {
        var result = {};
        console.log(e);
        if (e) {
            result = {
                statusCode: 500,
                body: {
                    message: e.message
                }
            }
        } else {
            result = {
                statusCode: 200,
                body: {
                    cname: cname,
                    backend: tenantDomain,
                    cert: secret.cert,
                    key: secret.key
                }
            }
        }
        console.log('do not share the secret', secret);
        res.json(result).end();
    });
});

/* POST create in credstash. */
router.post('/', function(req, res, next) {
    // validate cert
    console.log('post create mapping ');

    var cname = req.body.cname;
    var backend = req.body.backend;
    var cert = req.body.cert;
    var key = req.body.key;

    async.waterfall(
        [
            // TODO: validate cert
            function(callback) {
                callback(null, '');
            },
            // PUT into credstash
            function(result, callback) {
                // store this in credstash
                var putIntoCredStash = {
                    cname: cname,
                    backend: backend,
                    cert: cert,
                    key: key
                }

                // credstash.put('cname-tenant-cert:' + req.body.cert, function(e, secret) {
                //    console.log('do not share the secret', secret);
                // });

                // here is where we'd put into credstash
                var credstashKey = 'cname-tenant-cert:' + cname;
                console.log('simulate PUT into credstash: ' + credstashKey);

                callback(null, putIntoCredStash);
            }
        ],
        function(err, result) {
            console.log(err);
            console.log(result);
            if (err) console.log(err);

            // response
            var payload = {
                statusCode: 201,
                body: result
            }

            res.json(payload).end();

        });

});

module.exports = router;
