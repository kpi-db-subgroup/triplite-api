'use strict';

const { Injection } = require('../core/triplite-annotations');

Injection.annotate(PlacesController, { injections: ['placesService'] });
function PlacesController() {}

module.exports = PlacesController;
