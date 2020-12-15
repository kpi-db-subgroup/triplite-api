'use strict';

const { Injection } = require('../core/triplite-annotations');

Injection.annotate(RatingService, { injections: ['ratingRepository'] });
function RatingService() {}

module.exports = RatingService;
