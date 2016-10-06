const express = require('express');
const router = express.Router();
const Credstash = require('credstash');
const async = require('async');
const credstash = new Credstash();
const utils = require('../lib/utils.js');
const winston = require('winston');

/* GET mapping by cname */
router.get('/:cname', function(req, res, next) {

    var cname = req.params.cname;

    if (!cname) {
        res.json({ statusCode: 400, body: {} });
    }

    var credstashKey = 'cname-tenant-cert:' + cname;

    credstash.get(credstashKey, function(e, secret) {
        var result = {};
        var statusCode = 200;

        if (e) {
            winston.error(e);
            statusCode = 500;
            result = {
                statusCode: statusCode,
                body: {
                    message: e.message
                }
            }
        } else {
            result = {
                statusCode: statusCode,
                body: {
                    cname: cname,
                    backend: tenantDomain,
                    cert: secret.cert,
                    key: secret.key
                }
            }

        }
        winston.info('do not share the secret... ', secret);

        return res.status(statusCode).json(result);
        
    });
});

/* POST create in credstash. */
router.post('/', function(req, res, next) {

    var cname = req.body.cname;
    var backend = req.body.backend;
    var cert = req.body.cert;
    var key = req.body.key;

    async.waterfall(
        [
            // Validate cert
            function(callback) {
                if (utils.validateCert(cert)) {
                    callback(null, '');
                } else {
                    callback('Invalid cert');
                }
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
                //    winston.info('do not share the secret', secret);
                // });

                // here is where we'd put into credstash
                var credstashKey = 'cname-tenant-cert:' + cname;
                winston.info('simulate PUT into credstash: ' + credstashKey);

                callback(null, putIntoCredStash);
            }
        ],
        function(err, result) {

            var response = {};
            var statusCode = 201;

            if (err) {
                winston.error(err)

                statusCode = 500;
                response = {
                    statusCode: statusCode,
                    body: {
                        message: err
                    }
                }

            } else {
                response = {
                    statusCode: statusCode,
                    body: result
                }
            }

            res.status(statusCode).json(response);

        });
});

module.exports = router;
