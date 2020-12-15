'use strict';

const sqlite3 = require('sqlite3').verbose();
const { promisify } = require('util');
const environment = require('../environment');

const databasePath = environment.development ? ':memory:' : './db/triplite.db';

const database = new sqlite3.Database(databasePath);

const promisifiedInterface = {};
promisifiedInterface.all = promisify(database.all.bind(database));
promisifiedInterface.get = promisify(database.get.bind(database));
promisifiedInterface.run = promisify(database.run.bind(database));

promisifiedInterface.multipleQueriesRun = input =>
  input
    .replace(/(\r\n|\n|\r)/gm, '')
    .split(';')
    .filter(entry => entry.length > 0)
    .forEach(entry => promisifiedInterface.run(entry));

module.exports = promisifiedInterface;
