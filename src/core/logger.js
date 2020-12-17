/* eslint-disable no-console */

'use strict';

const fs = require('fs');

const Logger = {};

const Colors = {
  WHITE: '\x1b[0m%s\x1b[0m',
  YELLOW: '\x1b[33m%s\x1b[0m',
  RED: '\x1b[31m%s\x1b[0m',
  GREEN: '\x1b[32m%s\x1b[0m',
};

const LogType = {
  INFO: 'INFO',
  WARN: 'WARN',
  ERROR: 'ERROR',
  DEBUG: 'DEBUG',
};

const getLogTime = () => {
  const date = new Date();
  const logTime = date.toISOString();
  const logFileName = logTime.slice(0, 10);
  return { logFileName, logTime };
};

const printMessage = (logType, color, message) => {
  const { logFileName, logTime } = getLogTime();
  const outputMessage = `${logTime} || ${logType}: ${message}`;
  const path = `./logs/${logFileName}.log`;
  fs.appendFile(path, `${outputMessage}\n`, error => {
    if (error) throw error;
  });
  console.log(color, outputMessage);
};

Logger.info = message => {
  printMessage(LogType.INFO, Colors.WHITE, message);
};

Logger.warn = message => {
  printMessage(LogType.WARN, Colors.YELLOW, message);
};

Logger.error = message => {
  printMessage(LogType.ERROR, Colors.RED, message);
};

Logger.debug = message => {
  printMessage(LogType.DEBUG, Colors.GREEN, message);
};

module.exports = Logger;
