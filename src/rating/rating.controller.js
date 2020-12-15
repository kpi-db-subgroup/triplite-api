'use strict';

const Injection = require('../core/injection');

Injection.annotate(RatingController, { injections: ['ratingService'] });
function RatingController() {}

module.exports = RatingController;
