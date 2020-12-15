'use strict';

const { Injection } = require('../core/triplite-annotations');

Injection.annotate(UsersRepository, {
  injections: ['database, usersEntityBuilder'],
});
function UsersRepository() {}

UsersRepository.prototype.create = async function (user) {
  const result = await this.database.run(`
    INSERT INTO users(name, email, bio, date_of_birth, address, photo, password, type)
    VALUES(${user.name}, ${user.email}, ${user.bio},
      ${user.dateOfBirth}, ${user.address}, ${user.photo},
      ${user.password}, ${user.type})
  `);
  return result;
};

UsersRepository.prototype.findById = async function (id) {
  const row = await this.database.get(`SELECT * FROM users WHERE id=${id}`);
  return this.usersEntityBuilder.getEntityFromRow(row);
};

UsersRepository.prototype.findAll = async function () {
  const rows = await this.database.all('SELECT * FROM users');
  return this.usersEntityBuilder.getEntitiesFromRows(rows);
};

UsersRepository.prototype.update = async function (id, user) {
  const result = await this.database.run(`
    UPDATE users SET name=${user.name}, bio=${user.bio},
    date_of_birth=${user.dateOfBirth}, address=${user.address},
    photo=${user.photo}, password=${user.password} WHERE id=${id}
  `);
  return result;
};

UsersRepository.prototype.delete = async function (id) {
  const result = await this.database.run(`DELETE FROM users WHERE id=${id}`);
  return result;
};

module.exports = UsersRepository;
