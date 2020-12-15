'use strict';

const { Injection } = require('../core/triplite-annotations');

Injection.annotate(UsersService, { injections: ['usersRepository'] });
function UsersService() {}

module.exports = UsersService;
