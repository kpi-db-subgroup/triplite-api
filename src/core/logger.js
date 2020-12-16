'use strict';

const fs = require('fs');

const Logger = {};

const colors = {
  white: '\x1b[0m%s\x1b[0m',
  yellow: '\x1b[33m%s\x1b[0m',
  red: '\x1b[31m%s\x1b[0m',
  green: '\x1b[32m%s\x1b[0m',
}

function getLogTime() {
  const date = new Date();
  const logTime = date.toISOString();
  const logFileName = logTime.slice(0, 10);
  return { logFileName, logTime };
}

Logger.info = function (message) {
  const { logFileName, logTime } = getLogTime();
  const path = `../logs/logs-${logFileName}.txt`; // should be changed
  const outputMessage = logTime + ' || INFO: ' + message + '\n';
  fs.appendFile(path, outputMessage, error => {
    if (error) throw error;
  });
  console.log(colors.white, outputMessage);
}

Logger.warn = function (message) {
  const { logFileName, logTime } = getLogTime();
  const path = `../logs/logs-${logFileName}.txt`; // should be changed
  const outputMessage = logTime + ' || INFO: ' + message + '\n';
  fs.appendFile(path, outputMessage, error => {
    if (error) throw error;
  });
  console.log(colors.yellow, outputMessage);
}

Logger.error = function (message) {
  const { logFileName, logTime } = getLogTime();
  const path = `../logs/logs-${logFileName}.txt`; // should be changed
  const outputMessage = logTime + ' || ERROR: ' + message + '\n';
  fs.appendFile(path, outputMessage, error => {
    if (error) throw error;
  });
  console.log(colors.red, outputMessage);
}

Logger.debug = function (message) {
  const { logFileName, logTime } = getLogTime();
  const path = `../logs/logs-${logFileName}.txt`; // should be changed
  const outputMessage = logTime + ' || DEBUG: ' + message + '\n';
  fs.appendFile(path, outputMessage, error => {
    if (error) throw error;
  });
  console.log(colors.green, outputMessage);
}

module.exports = Logger;
