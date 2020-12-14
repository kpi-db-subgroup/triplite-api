'use strict';

const Injection = require('../core/injection');

Injection.annotate(SupportService, { injections: ['supportRepository'] });
function SupportService() {}

module.exports = SupportService;
