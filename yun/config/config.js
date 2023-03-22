module.exports = {
pb: {
  '8914442f7766b0926658c9cb1ef2746d': 'payload.Message',
//   'a39ecc02a15affad254ff1a1ae8a244b': 'data_compression.SensorMessage',
  'a39ecc02a15affad254ff1a1ae8a244b': 'data_compression.DeviceState',
},
productkey2object:{
  "74139f8ab541edb7a12a13eaeebaeada":{
      deviceInfo:{
          "data_format_version":{
              startByte:0,
              startBit:0,
              bitLength:8,
              divisor:1
          },
          "hardware_version":{
              startByte:1,
              startBit:0,
              bitLength:8,
              divisor:1
          },
          "software_version":{
              startByte:2,
              startBit:0,
              bitLength:8,
              divisor:1
          },
          "reserved_byte":{
              startByte:3,
              startBit:0,
              bitLength:16,
              divisor:1
          },
          "payloadLenth":{
              startByte:5,
              startBit:0,
              bitLength:8,
              divisor:1
          },
          "battery":{
              startByte:6,
              startBit:0,
              bitLength:16,
              divisor:1000
          }
      },
      sensorInfo:[
          {
              "sensorType":{
                  startByte:8,
                  startBit:0,
                  bitLength:8
              },
              "dataLength":{
                  startByte:9,
                  startBit:2,
                  bitLength:6
              },
              "value":{
                  "error_code1":{
                      startByte:9,
                      startBit:0,
                      bitLength:2
                  },
                  "water1":{
                      startByte:10,
                      startBit:0,
                      bitLength:16,
                      divisor:10,
                      unit:'%RH'
                  },
                  "temp1":{
                      startByte:12,
                      startBit:0,
                      bitLength:16,
                      divisor:10,
                      unit:'°C'
                  },
                  "N1":{
                      startByte:14,
                      startBit:0,
                      bitLength:16,
                      divisor:1,
                      unit:'mg/kg'
                  },
                  "P1":{
                      startByte:16,
                      startBit:0,
                      bitLength:16,
                      divisor:1,
                      unit:'mg/kg'
                  },
                  "K1":{
                      startByte:18,
                      startBit:0,
                      bitLength:16,
                      divisor:1,
                      unit:'mg/kg'
                  },
              }
          },
          {
              "sensorType":{
                  startByte:20,
                  startBit:0,
                  bitLength:8
              },
              "dataLength":{
                  startByte:21,
                  startBit:2,
                  bitLength:6
              },
              "value":{
                  "error_code2":{
                      startByte:21,
                      startBit:0,
                      bitLength:2
                  },
                  "water2":{
                      startByte:22,
                      startBit:0,
                      bitLength:16,
                      divisor:10,
                      unit:'%RH'
                  },
                  "temp2":{
                      startByte:24,
                      startBit:0,
                      bitLength:16,
                      divisor:10,
                      unit:'°C'
                  },
                  "N2":{
                      startByte:26,
                      startBit:0,
                      bitLength:16,
                      divisor:1,
                      unit:'mg/kg'
                  },
                  "P2":{
                      startByte:28,
                      startBit:0,
                      bitLength:16,
                      divisor:1,
                      unit:'mg/kg'
                  },
                  "K2":{
                      startByte:30,
                      startBit:0,
                      bitLength:16,
                      divisor:1,
                      unit:'mg/kg'
                  },
              }
          },
          {
              "sensorType":{
                  startByte:32,
                  startBit:0,
                  bitLength:8
              },
              "dataLength":{
                  startByte:33,
                  startBit:2,
                  bitLength:6
              },
              "value":{
                  "error_code3":{
                      startByte:33,
                      startBit:0,
                      bitLength:2
                  },
                  "water3":{
                      startByte:34,
                      startBit:0,
                      bitLength:16,
                      divisor:10,
                      unit:'%RH'
                  },
                  "temp3":{
                      startByte:36,
                      startBit:0,
                      bitLength:16,
                      divisor:10,
                      unit:'°C'
                  },
                  "N3":{
                      startByte:38,
                      startBit:0,
                      bitLength:16,
                      divisor:1,
                      unit:'mg/kg'
                  },
                  "P3":{
                      startByte:40,
                      startBit:0,
                      bitLength:16,
                      divisor:1,
                      unit:'mg/kg'
                  },
                  "K3":{
                      startByte:42,
                      startBit:0,
                      bitLength:16,
                      divisor:1,
                      unit:'mg/kg'
                  },
              }
          },
          {
              "sensorType":{
                  startByte:44,
                  startBit:0,
                  bitLength:8
              },
              "dataLength":{
                  startByte:45,
                  startBit:2,
                  bitLength:6
              },
              "value":{
                  "error_code4":{
                      startByte:45,
                      startBit:0,
                      bitLength:2
                  },
                  "water4":{
                      startByte:46,
                      startBit:0,
                      bitLength:16,
                      divisor:10,
                      unit:'%RH'
                  },
                  "temp4":{
                      startByte:48,
                      startBit:0,
                      bitLength:16,
                      divisor:10,
                      unit:'°C'
                  },
                  "N4":{
                      startByte:50,
                      startBit:0,
                      bitLength:16,
                      divisor:1,
                      unit:'mg/kg'
                  },
                  "P4":{
                      startByte:52,
                      startBit:0,
                      bitLength:16,
                      divisor:1,
                      unit:'mg/kg'
                  },
                  "K4":{
                      startByte:54,
                      startBit:0,
                      bitLength:16,
                      divisor:1,
                      unit:'mg/kg'
                  },
              }
          },
          {
              "sensorType":{
                  startByte:56,
                  startBit:0,
                  bitLength:8
              },
              "dataLength":{
                  startByte:57,
                  startBit:2,
                  bitLength:6
              },
              "value":{
                  "error_code5":{
                      startByte:57,
                      startBit:0,
                      bitLength:2
                  },
                  "water5":{
                      startByte:58,
                      startBit:0,
                      bitLength:16,
                      divisor:10,
                      unit:'%RH'
                  },
                  "temp5":{
                      startByte:60,
                      startBit:0,
                      bitLength:16,
                      divisor:10,
                      unit:'°C'
                  },
                  "N5":{
                      startByte:62,
                      startBit:0,
                      bitLength:16,
                      divisor:1,
                      unit:'mg/kg'
                  },
                  "P5":{
                      startByte:64,
                      startBit:0,
                      bitLength:16,
                      divisor:1,
                      unit:'mg/kg'
                  },
                  "K5":{
                      startByte:66,
                      startBit:0,
                      bitLength:16,
                      divisor:1,
                      unit:'mg/kg'
                  },
              }
          },
          {
              "sensorType":{
                  startByte:68,
                  startBit:0,
                  bitLength:8
              },
              "dataLength":{
                  startByte:69,
                  startBit:2,
                  bitLength:6
              },
              "value":{
                  "errorCodePH":{
                      startByte:69,
                      startBit:0,
                      bitLength:2
                  },
                  "PH":{
                      startByte:70,
                      startBit:0,
                      bitLength:16,
                      divisor:10,
                      unit:''
                  }
              }
          }
      ]                      
  },
  "?气象站did":{
      deviceInfo:{
          "data_format_version":{
              startByte:0,
              startBit:0,
              bitLength:8,
              divisor:1
          },
          "hardware_version":{
              startByte:1,
              startBit:0,
              bitLength:8,
              divisor:1
          },
          "software_version":{
              startByte:2,
              startBit:0,
              bitLength:8,
              divisor:1
          },
          "reserved_byte":{
              startByte:3,
              startBit:0,
              bitLength:16,
              divisor:1
          },
          "payloadLenth":{
              startByte:5,
              startBit:0,
              bitLength:8,
              divisor:1
          },
          "battery":{
              startByte:6,
              startBit:0,
              bitLength:16,
              divisor:1000
          }
      },
      sensorInfo:[
          {
              "sensorType":{
                  startByte:8,
                  startBit:0,
                  bitLength:8
              },
              "dataLength":{
                  startByte:9,
                  startBit:2,
                  bitLength:6
              },
              "value":{
                  "error_code1":{
                      startByte:9,
                      startBit:0,
                      bitLength:2
                  },
                  "windspeed":{
                      startByte:10,
                      startBit:0,
                      bitLength:16,
                      divisor:100,
                      unit:'m/s'
                  },
                  "windforce":{
                      startByte:12,
                      startBit:0,
                      bitLength:16,
                      divisor:10,
                      unit:'N?'
                  },
                  "winddirection":{
                      startByte:14,
                      startBit:0,
                      bitLength:16,
                      divisor:10,
                      unit:'°'
                  },
                  "humidity":{
                      startByte:16,
                      startBit:0,
                      bitLength:16,
                      divisor:10,
                      unit:'mg/kg'
                  },
                  "temperature":{
                      startByte:18,
                      startBit:0,
                      bitLength:16,
                      divisor:10,
                      unit:'mg/kg'
                  },
                  "atmos":{
                      startByte:20,
                      startBit:0,
                      bitLength:16,
                      divisor:10,
                      unit:'Kpa'
                  },
                  "illuminance":{
                      startByte:22,
                      startBit:0,
                      bitLength:8,
                      divisor:10,
                      unit:'Lux'
                  }


              }
          },
          {
              "sensorType":{
                  startByte:23,
                  startBit:0,
                  bitLength:8
              },
              "dataLength":{
                  startByte:24,
                  startBit:2,
                  bitLength:6
              },
              "value":{
                  "error_code2":{
                      startByte:24,
                      startBit:0,
                      bitLength:2
                  },
                  "rainfall":{
                      startByte:25,
                      startBit:0,
                      bitLength:16,
                      divisor:10,
                      unit:'mm'
                  }
              }
              
          }
      ],
  },
},
}
  