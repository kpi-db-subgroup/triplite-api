'use strict';

const { Injection } = require('../core/triplite-annotations');

Injection.annotate(OrganizationsController, {
  injections: ['organizationsService'],
});
function OrganizationsController() {}

module.exports = OrganizationsController;
