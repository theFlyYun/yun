/*
 * @Author: Long Yunfei
 * @Date: 2023-04-05 21:24:38
 * @LastEditTime: 2023-04-05 23:39:11
 * Copyright: 2023 BJTU. All Rights Reserved.
 * @Descripttion:
 */

/**
 * @brief: 归并排序
 * @return {*}
 */
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }
  return result;
}

/**
 * @brief: 用Winston实现日志功能，包含三个日志级别 info error warning
 * @return {*}
 */
const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, printf } = format;
const path = require("path");
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
  ],
});

module.exports = logger;
