'use strict';

const sqlite3 = require('sqlite3').verbose();

const database = new sqlite3.Database(':memory:'); // ../../db/triplite.db

module.exports = database;
