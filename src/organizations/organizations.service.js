'use strict';

const { Injection } = require('../core/triplite-annotations');

Injection.annotate(OrganizationsService, {
  injections: ['organizationsRepository'],
});
function OrganizationsService() {}

module.exports = OrganizationsService;
