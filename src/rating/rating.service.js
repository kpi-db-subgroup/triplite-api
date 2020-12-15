'use strict';

const Injection = require('../core/injection');

Injection.annotate(RatingService, { injections: ['ratingRepository'] });
function RatingService() {}

module.exports = RatingService;
