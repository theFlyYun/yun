/* logger singleton */
var winston = require('winston');
// var moment = require('moment');
// var _ = require('lodash');

var defaultOptions = {
  level: 'silly',
  colorize: false,
  humanReadable: false,
};

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: './yun/lib/logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: './yun/lib/logs/combined.log',level:'info' }),
  ],
});

module.exports = logger;
