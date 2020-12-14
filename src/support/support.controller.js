'use strict';

const Injection = require('../core/injection');

Injection.annotate(SupportController, { injections: ['supportService'] });
function SupportController() {}

module.exports = SupportController;
