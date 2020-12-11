'use strict';

const Injection = require('../core/injection');

Injection.annotate(PlacesController, { injections: ['placesService'] });
function PlacesController() {}

module.exports = PlacesController;
