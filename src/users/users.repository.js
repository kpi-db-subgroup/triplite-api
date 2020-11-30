'use strict';

const Injection = require('../core/injection');

Injection.annotate(UsersRepository, { injections: ['database'] });
function UsersRepository() {}

UsersRepository.prototype.create = function (user) {
  return user; // TODO
};

UsersRepository.prototype.findById = function (id) {
  return id; // TODO
};

UsersRepository.prototype.findAll = function () {
  return null; // TODO
};

UsersRepository.prototype.update = function (id, user) {
  return { id, user }; // TODO
};

UsersRepository.prototype.delete = function (id) {
  return id; // TODO
};

module.exports = UsersRepository;
