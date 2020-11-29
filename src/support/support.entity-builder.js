'use strict';

const EntityBuilder = require('../core/entity-builder');

const SupportEntity = {
  id: -1,
  title: '',
  description: '',
  userId: null,
};

module.exports = EntityBuilder(SupportEntity);
