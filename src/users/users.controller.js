'use strict';

const { Injection } = require('../core/triplite-annotations');

Injection.annotate(UsersController, { injections: ['usersService'] });
function UsersController() {}

module.exports = UsersController;
