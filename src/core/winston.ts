import winston, { Logger } from "winston";
import util from "util";
import config from "./config";

var logger : Logger;

var options = {
  console: {
    level: 'info',
    handleExceptions: true,
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.printf(function (info) {
        // var userInfo = info.meta && info.meta.username ? info.meta.username + '@' + info.meta.companyName + ' - ' : '';
        // var message = typeof info.message === 'object' ? JSON.stringify(info.message) : info.message;
        // return '\u001b[36m' + moment(info.timestamp).tz('CET').format('HH:mm:ss') + ': \u001b[35m' + userInfo + '\u001b[0m' + message;
        return info.message;
      })
    ),
    colorize: true
  },
};

//Default transports
var transports = [
  new winston.transports.Console(options.console)
];

export class LoggerStream {
  write(message: string) {
    if (logger) {
      logger.info(message);
    }
  }
}

export default {
  init: function() {
    logger = winston.createLogger({
      transports,
      exitOnError: false
    });

    console.log = function () {
      logger.info.apply(logger, [Array.prototype.slice.call(arguments)]);
    };
    console.info = function () {
      logger.info.apply(logger, [Array.prototype.slice.call(arguments)]);
    };
    console.warn = function () {
      logger.warn.apply(logger, [Array.prototype.slice.call(arguments)]);
    };
    console.error = function () {
      logger.error.apply(logger, [Array.prototype.slice.call(arguments)]);
    };
    console.debug = function () {
      logger.debug.apply(logger, [Array.prototype.slice.call(arguments)]);
    };
    
    return logger;
  }
};
