'use strict';

const Injection = require('../core/injection');

Injection.annotate(SupportRepository, {
  injections: ['database', 'supportEntityBuilder'],
});
function SupportRepository() {}

module.exports = SupportRepository;
