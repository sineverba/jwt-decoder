'use strict';

var expect = require('chai').expect;
var { parseJwt } = require('../index');

describe('#parseJwt', function () {

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

    it('Should return parsed token as object', function () {
        const expectedObject = {
            "sub": "1234567890",
            "name": "John Doe",
            "iat": 1516239022
        };
        const parsedToken = parseJwt(token);
        expect(expectedObject).to.eql(parsedToken);
    });
});
