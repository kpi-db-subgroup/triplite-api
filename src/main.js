'use strict';

const Logger = require('./core/logger');
const TripLiteExceptions = require('./core/triplite-exceptions');

const { Injection } = require('./core/triplite-annotations');
const AppModule = require('./app.module');

const environment = require('./environment');
const databaseStarter = require('./database/database-starter');

function Main() {}

Main.injectDependencies = () => {
  const injectionAnnotated = Injection.getAnnotated();
  for (const injectionKey in injectionAnnotated) {
    const annotatedObject = injectionAnnotated[injectionKey];
    const { injections } = annotatedObject.params;
    for (const injection of injections) {
      const { prototype } = annotatedObject.objectInterface.value;
      prototype[injection] = AppModule[injection];
    }
  }
};

Main.initializeDatabase = async () => {
  if (AppModule.database) {
    const starter = databaseStarter(AppModule.database);
    await starter.initializeTables();
    if (environment.development) {
      await starter.fillTestData();
    }
  } else {
    Logger.error(TripLiteExceptions.CANNOT_INITIALIZE_DATABASE);
  }
};

module.exports = Main;
