'use strict';

const EntityBuilder = entity => {
  const factory = () => {};
  factory.getEntity = () => ({ ...entity });
  factory.getEntityFromRow = row => {
    const result = factory.getEntity();
    for (const key in row) {
      result[key] = row[key];
    }
    return result;
  };
  factory.getEntitiesFromRows = rows => {
    const result = [];
    for (const row of rows) {
      result.push(factory.getEntityFromRow(row));
    }
    return result;
  };
  return factory;
};

module.exports = EntityBuilder;
