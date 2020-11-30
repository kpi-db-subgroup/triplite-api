'use strict';

const Injection = require('../core/injection');

Injection.annotate(UsersRepository, { injections: ['database'] });
function UsersRepository() {}

module.exports = UsersRepository;
