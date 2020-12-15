'use strict';

const { Injection } = require('../core/triplite-annotations');

Injection.annotate(RatingController, { injections: ['ratingService'] });
function RatingController() {}

module.exports = RatingController;
