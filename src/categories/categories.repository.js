'use strict';

const Injection = require('../core/injection');

Injection.annotate(CategoriesRepository, {
  injections: ['database', 'categoriesEntityBuilder'],
});
function CategoriesRepository() {}

CategoriesRepository.prototype.create = async function(categoriesRequest) {
  const result = await this.database.run(`
  INSERT INTO categories(name)
  VALUES(${categoriesRequest.name})
  `);

  return result;
}

CategoriesRepository.prototype.findById = async function(id) {
  const row = await this.database.get(`SELECT * FROM categories WHERE id=${id}`);
  return this.categoriesEntityBuilder.getEntityFromRow(row);
};

CategoriesRepository.prototype.findAll = async function() {
  const rows = await this.database.all(`SELECT * FROM categories`);
  return this.categoriesEntityBuilder.getEntitiesFromRows(rows);
}

CategoriesRepository.prototype.update = async function(id, categoriesRequest) {
  const result = await this.database.run(`
  UPDATE categories SET name=${categoriesRequest.name} WHERE id=${id}
  `);
  return result;
}


CategoriesRepository.prototype.update = async function(id) {
  const result = await this.database.run(`
  DELETE FROM categories WHERE id=${id}
  `);
  return result;
}

module.exports = CategoriesRepository;
