JWT decoder
===========

| CI / CD | Status |
| ------- | ------ |
| NPM | [![npm version](https://badge.fury.io/js/%40sineverba%2Fjwt-decoder.svg)](https://badge.fury.io/js/%40sineverba%2Fjwt-decoder) |
| Semaphore CI | [![Build Status](https://sineverba.semaphoreci.com/badges/jwt-decoder/branches/master.svg?style=shields&key=8d163508-7b97-4826-86ea-0843b7089483)](https://sineverba.semaphoreci.com/projects/jwt-decoder) |
| Circle CI | [![CircleCI](https://circleci.com/gh/sineverba/jwt-decoder.svg?style=svg)](https://circleci.com/gh/sineverba/jwt-decoder) |
| Coverall | [![Coverage Status](https://coveralls.io/repos/github/sineverba/jwt-decoder/badge.svg?branch=master)](https://coveralls.io/github/sineverba/jwt-decoder?branch=master) |
| SonarCloud | [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=jwt-decoder&metric=alert_status)](https://sonarcloud.io/dashboard?id=jwt-decoder) |


`jwt-decoder` decodes a [JWT Token](https://jwt.io/) as an object.

## Installation
`npm install @sineverba/jwt-decoder`

## Usage

```js
// Import module
let parseJwt = require('@sineverba/jwt-decoder');
// Or...
// import parseJwt from 'jwt-decoder'

let parsed = parseJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c");
console.log(parsed); // returns {"sub": "1234567890", "name": "John Doe", "iat": 1516239022};
```

## Tests

`npm run test` for simple test

`npm run cover` for coverage
