'use strict';

const fs = require('fs');

const Logger = {};

const colors = {
  white: '\x1b[0m%s\x1b[0m',
  yellow: '\x1b[33m%s\x1b[0m',
  red: '\x1b[31m%s\x1b[0m',
  green: '\x1b[32m%s\x1b[0m',
};

function getLogTime() {
  const date = new Date();
  const logTime = date.toISOString();
  const logFileName = logTime.slice(0, 10);
  return { logFileName, logTime };
}

function printLogs(messageType, color, message) {
  const { logFileName, logTime } = getLogTime();
  const outputMessage = `${logTime}  || ${messageType}: ${message} \n`;
  const path = `./logs/logs-${logFileName}.log`;
  fs.appendFile(path, outputMessage, error => {
    if (error) throw error;
  });
  console.log(color, outputMessage);
}

Logger.info = function (message) {
  printLogs('INFO', colors.white, message);
};

Logger.warn = function (message) {
  printLogs('WARN', colors.yellow, message);
};

Logger.error = function (message) {
  printLogs('ERROR', colors.red, message);
};

Logger.debug = function (message) {
  printLogs('DEBUG', colors.green, message);
};

module.exports = Logger;
