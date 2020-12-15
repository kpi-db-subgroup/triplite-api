'use strict';

const { Injection } = require('../core/triplite-annotations');

Injection(FavouritesRepository, {
  injections: ['database', 'usersEntityBuilder', 'placesEntityBuilder'],
});
function FavouritesRepository() {}

FavouritesRepository.prototype.findPlacesByUserId = async function (userId) {
  const rows = await this.database.all(`
    SELECT * FROM places
    JOIN favourites ON places.id=favourites.place_id
    WHERE favourites.user_id=${userId}
  `);
  return this.placesEntityBuilder(rows);
};

FavouritesRepository.prototype.findUsersByPlaceId = async function (placeId) {
  const rows = await this.database.all(`
    SELECT * FROM users
    JOIN favourites ON users.id=favourites.user_id
    WHERE favourites.place_id=${placeId}
  `);
  return rows;
};

module.exports = FavouritesRepository;
