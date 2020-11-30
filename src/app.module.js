'use strict';

const { lowerCaseFirstLetter } = require('./core/common');

const UsersModule = require('./users/users.module');

const database = require('./database/database-interface');

const extractInstances = obj =>
  Object.keys(obj).reduce((accumulator, current) => {
    accumulator[lowerCaseFirstLetter(current)] = new obj[current]();
    return accumulator;
  }, {});

module.exports = {
  ...extractInstances(UsersModule),
  database,
};
