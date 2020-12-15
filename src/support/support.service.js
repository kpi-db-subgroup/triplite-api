'use strict';

const { Injection } = require('../core/triplite-annotations');

Injection.annotate(SupportService, { injections: ['supportRepository'] });
function SupportService() {}

module.exports = SupportService;
