'use strict';

const Injection = require('../core/injection');

Injection.annotate(OrganizationsRepository, {
  injections: ['database, organizationsEntityBuilder'],
});
function OrganizationsRepository() {}

OrganizationsRepository.prototype.create = async function (organization) {
  const result = await this.database.run(`
    INSERT INTO organizations(name, address, owner, document)
    VALUES(${organization.name}, ${organization.address}, ${organization.owner},
      ${organization.document})
  `);
  return result;
};

OrganizationsRepository.prototype.findById = async function (id) {
  const row = await this.database.get(`
    SELECT * FROM organizations WHERE id=${id}
  `);
  return this.organizationsEntityBuilder.getEntityFromRow(row);
};

OrganizationsRepository.prototype.findAll = async function () {
  const rows = await this.database.all('SELECT * FROM organizations');
  return this.organizationsEntityBuilder.getEntitiesFromRows(rows);
};

OrganizationsRepository.prototype.update = async function (id, organization) {
  const result = await this.database.run(`
    UPDATE organizations SET name=${organization.name}, address=${organization.address},
    owner=${organization.owner}, document=${organization.document} WHERE id=${id}
  `);
  return result;
};

OrganizationsRepository.prototype.delete = async function (id) {
  const result = await this.database.run(`
    DELETE FROM organizations WHERE id=${id}
  `);
  return result;
};

module.exports = OrganizationsRepository;
