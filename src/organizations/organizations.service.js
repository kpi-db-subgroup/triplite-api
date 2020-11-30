'use strict';

const Injection = require('../core/injection');

Injection.annotate(OrganizationsService, { injections: ['organizationsRepository'] });
function OrganizationsService() {}

module.exports = OrganizationsService;
