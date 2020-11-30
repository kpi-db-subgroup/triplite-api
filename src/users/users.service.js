'use strict';

const Injection = require('../core/injection');

Injection.annotate(UsersService, { injections: ['usersRepository'] });
function UsersService() {}

module.exports = UsersService;
