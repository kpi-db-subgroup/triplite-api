'use strict';

const Annotation = require('annotations-js');

Annotation.bind(Injection);
function Injection() {}

Annotation.bind(Controller);
function Controller() {}

Annotation.bind(Route);
function Route() {}

module.exports = {
  Injection,
};
