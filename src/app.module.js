'use strict';

const { lowerCaseFirstLetter } = require('./core/common');

const UsersModule = require('./users/users.module');

const database = require('./database/database-interface');

const extractInstances = obj =>
  Object.keys(obj).reduce((accumulator, current) => {
    const Bean = obj[current];
    accumulator[lowerCaseFirstLetter(current)] =
      typeof bean === 'function' ? new Bean() : Bean;
    return accumulator;
  }, {});

module.exports = {
  ...extractInstances(UsersModule),
  database,
};
