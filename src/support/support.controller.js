'use strict';

const { Injection } = require('../core/triplite-annotations');

Injection.annotate(SupportController, { injections: ['supportService'] });
function SupportController() {}

module.exports = SupportController;
