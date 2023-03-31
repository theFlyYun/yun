const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;
const path = require('path');
const date = new Date();

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = createLogger({
  format: combine(
    label({ label: 'right meow!' }),
    timestamp(),
    myFormat
  ),
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new transports.File({ filename: path.join(__dirname,`./logs/error/${date.toDateString()}.log`), level: 'error' }),
    new transports.File({ filename: path.join(__dirname,`./logs/info/${date.toDateString()}.log`),level:'info' }),
    new transports.File({ filename: path.join(__dirname,`./logs/warning/${date.toDateString()}.log`),level:'warning' }),
  ],
});

module.exports = logger;
