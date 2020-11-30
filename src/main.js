'use strict';

const Injection = require('./core/injection');
const AppModule = require('./app.module');

function Main() {}

Main.injectDependencies = () => {
  const injectionAnnotated = Injection.getAnnotated();
  for (const injectionKey in injectionAnnotated) {
    const annotatedObject = injectionAnnotated[injectionKey];
    const { injections } = annotatedObject.params;
    for (const injection of injections) {
      annotatedObject.objectInterface.value[injection] = AppModule[injection];
    }
  }
};

module.exports = Main;