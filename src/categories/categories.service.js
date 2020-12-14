'use strict';
const Injection = require('../core/injection');

Injection.annotate(CategoriesService, { injections: ['categoriesRepository'] });
function CategoriesService() {}

module.exports = CategoriesService;
