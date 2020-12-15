'use strict';

const { Injection } = require('../core/triplite-annotations');

Injection.annotate(PlacesService, { injections: ['placesRepository'] });
function PlacesService() {}

module.exports = PlacesService;
