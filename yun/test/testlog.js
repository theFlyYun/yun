/*
 * @Author: Long Yunfei
 * @Date: 2023-04-05 21:24:38
 * @LastEditTime: 2023-04-07 21:20:44
 * Copyright: 2023 BJTU. All Rights Reserved.
 * @Descripttion: 
 */
const createLogger = require("../lib/logs/logger");
const opt = require("../config/config").logger;

const JS = {
  state: {
    reported: {
      data_format_version: 1,
      hardware_version: 1,
      software_version: 1,
      reserved_byte: 0,
      payload_Len: 62,
      battery: 3.541,
      sensorType_1: 0,
      dataLength_1: 10,
      error_code_1: 0,
      water_1: 0,
      temp_1: 17.6,
      N_1: 0,
      P_1: 0,
      K_1: 0,
      sensorType_2: 1,
      dataLength_2: 10,
      error_code_2: 0,
      water_2: 0,
      temp_2: 17.8,
      N_2: 0,
      P_2: 0,
      K_2: 0,
      sensorType_3: 1,
      dataLength_3: 10,
      error_code_3: 0,
      water_3: 0,
      temp_3: 17.5,
      N_3: 0,
      P_3: 0,
      K_3: 0,
      sensorType_4: 1,
      dataLength_4: 10,
      error_code_4: 0,
      water_4: 0,
      temp_4: 18,
      N_4: 0,
      P_4: 0,
      K_4: 0,
      sensorType_5: 1,
      dataLength_5: 10,
      error_code_5: 0,
      water_5: 0,
      temp_5: 18,
      N_5: 0,
      P_5: 0,
      K_5: 0,
      sensorType_6: null,
      dataLength_6: null,
      errorCode_6: null,
      PH: null,
    },
  },
};
const logger = new createLogger(opt);
const str='str'
logger.debug("Hello again distributed logs");
logger.info("Hello again distributed logs");
// logger.info(JS);
logger.error(str,"Hello again distributed logs");

// logger.log('Hello again distributed logs')
