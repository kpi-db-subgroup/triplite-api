'use strict';

const EntityBuilder = require('../core/entity-builder');

const UsersEntity = {
  id: -1,
  name: '',
  email: '',
  bio: '',
  dateOfBirth: null,
  address: '',
  photo: '',
  password: '',
  type: '',
  isBanned: false,
  organization: null,
};

module.exports = EntityBuilder(UsersEntity);
