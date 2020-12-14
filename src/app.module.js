'use strict';

const { lowerCaseFirstLetter } = require('./core/common');

const UsersModule = require('./users/users.module');
const OrganizationsModule = require('./organizations/organizations.module');
const PlacesModule = require('./places/places.module');
const SupportModule = require('./support/support.module');

const database = require('./database/database-interface');

const extractInstances = obj =>
  Object.keys(obj).reduce((accumulator, current) => {
    let Bean = obj[current];
    try {
      Bean = new obj[current]();
    } catch (exception) {
      // TODO
    }
    accumulator[lowerCaseFirstLetter(current)] = Bean;
    return accumulator;
  }, {});

module.exports = {
  ...extractInstances(UsersModule),
  ...extractInstances(OrganizationsModule),
  ...extractInstances(PlacesModule),
  ...extractInstances(SupportModule),
  database,
};
