'user strict';

const Injection = require('../core/injection');

Injection.annotate(RatingRepository, {
  injections: ['database', 'ratingEntityBuilder'],
});
function RatingRepository() {}

RatingRepository.prototype.create = async function (rating) {
  const result = await this.database.run(`
    INSERT INTO rating(count, userId, placeId)
    VALUES(${rating.count}, ${rating.userId}, ${rating.placeId})
  `);
  return result;
};

RatingRepository.prototype.findById = async function (id) {
  const row = await this.database.get(`SELECT * FROM rating WHERE id=${id}`);
  return this.ratingEntityBuilder.getEntityFromRow(row);
};

RatingRepository.prototype.findAll = async function () {
  const rows = await this.database.all('SELECT * FROM rating');
  return this.ratingEntityBuilder.getEntitiesFromRows(rows);
};

RatingRepository.prototype.update = async function (id, rating) {
  const result = await this.database.run(`
    UPDATE rating SET count=${rating.count}, userId=${rating.userId},
    placeId=${rating.placeId} WHERE id=${id}
  `);
  return result;
};

RatingRepository.prototype.findByUserId = async function (userId) {
  const rows = await this.database.all(`
    SELECT * FROM rating WHERE userId=${userId}
  `);
  return rows;
};

RatingRepository.prototype.findByPlaceId = async function (placeId) {
  const rows = await this.database.all(`
    SELECT * FROM rating WHERE placeId=${placeId}
  `);
  return rows;
};

module.exports = RatingRepository;
