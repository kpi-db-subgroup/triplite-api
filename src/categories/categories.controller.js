'use strict';

const { Injection } = require('../core/triplite-annotations');

Injection.annotate(CategoriesController, { injections: ['categoriesService'] });
function CategoriesController() {}

module.exports = CategoriesController;
