'use strict';

const mocha = require('mocha');
const assert = require('assert');

const EntityBuilder = require('../../src/core/entity-builder');

const CustomEntity = {
  numParam: -1,
  stringParam: '',
  boolParam: false,
};

const CustomEntityBuilder = EntityBuilder(CustomEntity);

mocha.describe('Entity Builder Test', () => {
  mocha.it('Get a copy of object', () => {
    const actual = CustomEntityBuilder.getEntity();
    actual.numParam = 0;
    assert.notStrictEqual(actual, CustomEntity);
  });

  mocha.it('Get entity from row (hash-table)', () => {
    const expected = {
      numParam: 10,
      stringParam: 'Qwerty',
      boolParam: true,
    };
    const actual = CustomEntityBuilder.getEntityFromRow(expected);
    assert.deepStrictEqual(actual, expected);
  });

  mocha.it('Get entities from array of rows (hash-table)', () => {
    const expected = [
      {
        numParam: 10,
        stringParam: 'Qwerty',
        boolParam: true,
      },
      {
        numParam: 20,
        stringParam: 'Qwerty',
        boolParam: true,
      },
    ];
    const actual = CustomEntityBuilder.getEntitiesFromRows(expected);
    assert.deepStrictEqual(actual, expected);
  });
});
