'use strict';

const EntityBuilder = require('../core/entity-builder');

const CommentsEntity = {
  id: -1,
  message: '',
  userId: null,
  placeId: null,
  commentId: null,
  isDeleted: false,
};

module.exports = EntityBuilder(CommentsEntity);
