const mysql = require('think-model-mysql');

module.exports = {
    handle: mysql,
    database: 'olm',
    prefix: 'hiolabs_',
    encoding: 'utf8mb4',
    host: '121.36.108.165',
    port: '3306',
    user: 'olm',
    password: 'olm@123A',
    dateStrings: true
};
