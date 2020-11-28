'use strict';

const EntityBuilder = entity => {
  const factory = () => {};
  factory.getEntity = () => ({ ...entity });
  // TODO: implement method for getting entity from base row
  // TODO: implement method for getting entity from base rows array
  return factory;
};

module.exports = EntityBuilder;
