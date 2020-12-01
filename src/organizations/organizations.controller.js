'use strict';

const Injection = require('../core/injection');

Injection.annotate(OrganizationsController, {
  injections: ['organizationsService'],
});
function OrganizationsController() {}

module.exports = OrganizationsController;
