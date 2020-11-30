'use strict';

const sqlite3 = require('sqlite3').verbose();
const { promisify } = require('util');

const database = new sqlite3.Database(':memory:');

const promisifiedInterface = {};
promisifiedInterface.all = promisify(database.all.bind(database));
promisifiedInterface.get = promisify(database.get.bind(database));
promisifiedInterface.run = promisify(database.run.bind(database));

module.exports = promisifiedInterface;
