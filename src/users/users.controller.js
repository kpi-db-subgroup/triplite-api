'use strict';

const Injection = require('../core/injection');

Injection.annotate(UsersController, { injections: ['usersService'] });
function UsersController() {}

module.exports = UsersController;
