'use strict';

const EntityBuilder = require('../core/entity-builder');

const OrganizationsEntity = {
  id: -1,
  name: '',
  address: '',
  owner: '',
  document: '',
};

module.exports = EntityBuilder(OrganizationsEntity);
