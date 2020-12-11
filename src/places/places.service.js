'use strict';

const Injection = require('../core/injection');

Injection.annotate(PlacesService, { injections: ['placesRepository'] });
function PlacesService() {}

module.exports = PlacesService;
