'use strict';

const { Injection } = require('../core/triplite-annotations');

Injection.annotate(CategoriesService, { injections: ['categoriesRepository'] });
function CategoriesService() {}

module.exports = CategoriesService;
