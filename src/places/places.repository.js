'use strict';

const Injection = require('../core/injection');

Injection.annotate(PlacesRepository, {
  injections: ['database, placesEntityBuilder'],
});
function PlacesRepository() {}

PlacesRepository.prototype.create = async function (place) {
  const result = await this.database.run(`
    INSERT INTO places(name, photo, description, phone, working_time, address, services,
      places_count, booking_service, creation_date, is_verified)
    VALUES(${place.name}, ${place.photo}, ${place.description},
      ${place.phone}, ${place.working_time}, ${place.address},
      ${place.services}, ${place.places_count}, ${place.booking_service}, 
      ${place.creation_date}, ${place.is_verified})
  `);
  return result;
};

PlacesRepository.prototype.findById = async function (id) {
  const row = await this.database.get(`SELECT * FROM places WHERE id=${id}`);
  return this.placesEntityBuilder.getEntityFromRow(row);
};

PlacesRepository.prototype.findAll = async function () {
  const rows = await this.database.all('SELECT * FROM places');
  return this.placesEntityBuilder.getEntitiesFromRows(rows);
};

PlacesRepository.prototype.update = async function (id, place) {
  const result = await this.database.run(`
    UPDATE places SET name=${place.name}, photo=${place.photo}, description=${place.description},
    phone=${place.phone}, working_time=${place.working_time}, address=${place.address},
    services=${place.services}, places_count=${place.places_count}, booking_service=${place.booking_service}, 
    creation_date=${place.creation_date}, is_verified=${place.is_verified} WHERE id=${id}
  `);
  return result;
};
  
PlacesRepository.prototype.delete = async function (id) {
  const result = await this.database.run(`DELETE FROM places WHERE id=${id}`);
  return result;
};

module.exports = PlacesRepository;
