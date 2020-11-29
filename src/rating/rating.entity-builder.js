'use strict';

const EntityBuilder = require('../core/entity-builder');

const RatingEntity = {
  id: -1,
  count: null,
  userId: null,
  placeId: null,
};

module.exports = EntityBuilder(RatingEntity);
