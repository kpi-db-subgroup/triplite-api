'use strict';

const Injection = require('./core/injection');
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
    // TODO
  }
};

module.exports = Main;
