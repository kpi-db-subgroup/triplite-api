'use strict';

const { Injection } = require('../core/triplite-annotations');

Injection.annotate(SupportRepository, {
  injections: ['database', 'supportEntityBuilder'],
});
function SupportRepository() {}

SupportRepository.prototype.create = async function (supportRequest) {
  const result = await this.database.run(`
    INSERT INTO support_requests(title, description, user_id)
    VALUES(${supportRequest.title}, ${supportRequest.description}, ${supportRequest.userId})
  `);
  return result;
};

SupportRepository.prototype.findById = async function (id) {
  const row = await this.database.get(`
    SELECT * FROM support_requests WHERE id=${id}
  `);
  return this.supportEntityBuilder.getEntityFromRow(row);
};

SupportRepository.prototype.findByUserId = async function (userId) {
  const rows = await this.database.all(`
    SELECT * FROM support_requests WHERE user_id=${userId}
  `);
  return rows;
};

SupportRepository.prototype.findAll = async function () {
  const rows = await this.database.all('SELECT * FROM support_requests');
  return this.supportEntityBuilder.getEntitiesFromRows(rows);
};

SupportRepository.prototype.update = async function (id, supportRequest) {
  const result = await this.database.run(`
    UPDATE support_requests SET title=${supportRequest.title},
    description=${supportRequest.description} WHERE id=${id}
  `);
  return result;
};

SupportRepository.prototype.delete = async function (id) {
  const result = await this.database.run(`
    DELETE FROM support_requests WHERE id=${id}
  `);
  return result;
};

module.exports = SupportRepository;
