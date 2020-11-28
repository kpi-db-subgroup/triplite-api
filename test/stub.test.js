'use strcit';

const mocha = require('mocha');
const assert = require('assert');

mocha.describe('Stub test', () => {
  mocha.it('Works fine', () => {
    assert(true, true);
  });
});
