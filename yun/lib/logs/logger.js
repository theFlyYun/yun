/*
 * @Author: Long Yunfei
 * @Date: 2023-04-01 21:24:38
 * @LastEditTime: 2023-04-07 10:13:41
 * Copyright: 2023 BJTU. All Rights Reserved.
 * @Descripttion: 
 */
const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, printf } = format;
const path = require("path");
// const date = new Date();

// const myFormat = printf(({ level, message, label, timestamp }) => {
//   return `${timestamp} [${label}] ${level}: ${message}`;
// });

// const logger = createLogger({
//   format: combine(
//     label({ label: 'right meow!' }),
//     timestamp(),
//     myFormat
//   ),
//   transports: [
//     //
//     // - Write all logs with importance level of `error` or less to `error.log`
//     // - Write all logs with importance level of `info` or less to `combined.log`
//     //
//     new transports.File({ filename: path.join(__dirname,`./logs/error/${date.toDateString()}.log`), level: 'error' }),
//     new transports.File({ filename: path.join(__dirname,`./logs/info/${date.toDateString()}.log`),level:'info' }),
//     new transports.File({ filename: path.join(__dirname,`./logs/warning/${date.toDateString()}.log`),level:'warning' }),
//   ],
// });

// module.exports = logger;

require("winston-daily-rotate-file");

const customFormat = format.combine(
  format.timestamp({ format: "MMM-DD-YYYY HH:mm:ss" }),
  format.align(),
  format.printf((i) => `${i.level}: ${[i.timestamp]}: ${i.message}`)
);
const defaultOptions = {
  format: customFormat,
  datePattern: "YYYY-MM-DD",
  zippedArchive: true,
  maxSize: "20m",
  maxFiles: "14d",
};
const logger = createLogger({
  format: customFormat,
  transports: [
    new transports.DailyRotateFile({
      filename: path.join(__dirname, `./logs/info/%DATE%.log`),
      level: "info",
      ...defaultOptions,
    }),
    new transports.DailyRotateFile({
      filename: path.join(__dirname, `./logs/error/%DATE%.log`),
      level: "error",
      ...defaultOptions,
    }),
    new transports.DailyRotateFile({
      filename: path.join(__dirname, `./logs/warning/%DATE%.log`),
      level: "warning",
      ...defaultOptions,
    }),
    new transports.Console()
  ],
});

module.exports = logger;
