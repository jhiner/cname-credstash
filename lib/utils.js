const x509 = require('x509');

function validateCert(cert) {
    // if it can parse the cert, it is valid
    // TODO: Also validate subject CN, expiration?
    try {
        var cert = x509.parseCert(cert);
        return cert ? true : false;        
    } catch (e) {
        return false;
    }
}

module.exports = {
    validateCert: validateCert
}
