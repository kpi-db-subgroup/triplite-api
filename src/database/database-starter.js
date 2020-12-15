'use strict';

const { readFile } = require('fs').promises;

const files = {
  configuration: './db/configuration/db.sql',
  data: './db/configuration/data.sql',
};

const options = {
  encoding: 'utf8',
};

const databaseStarter = database => {
  const initializeTables = async () => {
    const initialConfiguration = await readFile(files.configuration, options);
    const result = await database.multipleQueriesRun(initialConfiguration);
    return result;
  };
  const fillTestData = async () => {
    const testData = await readFile(files.data, options);
    const result = await database.multipleQueriesRun(testData);
    return result;
  };
  return { initializeTables, fillTestData };
};

module.exports = databaseStarter;
