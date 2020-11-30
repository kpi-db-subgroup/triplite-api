'use strict';

const EntityBuilder = require('../core/entity-builder');

const PlacesEntity = {
  id: -1,
  name: '',
  photo: '',
  description: '',
  phone: '',
  working_time: '',
  address: '',
  services: '',
  places_count: -1,
  booking_service: '',
  creation_date: null,
  is_verified: false,
  category_id: null,
  organization_id: null,
};

module.exports = EntityBuilder(PlacesEntity);
