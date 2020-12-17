'use strict';

const Main = require('./src/main');

const Logger = require('./src/core/logger');

Main.injectDependencies();
Main.initializeDatabase();

Logger.debug('Hello');
Logger.info('Hello');
Logger.error('Hello');
Logger.warn('Hello');
