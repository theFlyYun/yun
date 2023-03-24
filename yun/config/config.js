module.exports = {
pb: {
  'dc6ed37dca2e99ca79213e45bd1a1662': 'payload.Message',
  '56f9c24fe95b094ae74b108599371a63': 'data_compression.SensorMessage',
//   'a39ecc02a15affad254ff1a1ae8a244b': 'data_compression.DeviceState',
},
productkey2object:{
  "74139f8ab541edb7a12a13eaeebaeada":'soil.json',
  "1b313f4449a637bbbe8ed40c643a691a":'weather.json'
},
connect:{
  host:'http://8.142.81.91:1883',
  username:'lyf20230303',
  uid:'U915f0c3e0729b39095ee139843e0a7c',
  password: "20230303",
  options : {
    keepalive: 60,
    clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
    protocolId: 'MQTT',
    protocolVersion: 3,
    clean: true,
    reconnectPeriod: 1000,
    connectTimeout: 30 * 1000,
    username: 'U915f0c3e0729b39095ee139843e0a7c',
    password: "20230303",
  }
}
}
  