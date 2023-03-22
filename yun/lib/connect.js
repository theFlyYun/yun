const config = require('../config/config.js');
const ProtoBuf = require('../lib/protoBufferUnit/protoBufferUnit');
 

var mqtt = require('mqtt');
// const { PBtoJSON } = require('../lib/protoBufferUnit');

const clientId = 'mqttjs_' + Math.random().toString(16).substr(2, 8);

const host = 'http://8.142.81.91:1883';
//
// const host = 'ws://localhost:1884';
// var productKey = "a39ecc02a15affad254ff1a1ae8a244b"
// const data4soil = '0101060000420DAC010A01010202030304040505010A01010202030304040505010A01010202030304040505010A01010202030304040505010A0101020203030404050502020046';//编码后字节流
// const data4soil = '01010600003E2FD4010A01000101010501060107001A02000201020502060207010A03000301030503060307010A04000401040504060407010A05000501050505060507';//编码后字节流
// const productkey1='74139f8ab541edb7a12a13eaeebaeada'//soil did
// const productkey2='?气象站did'
// const data4weather='0101060000420DAC030D0101020203030404050506060704020101'

// var productKey = "74139f8ab541edb7a12a13eaeebaeada"
var productKey = "a39ecc02a15affad254ff1a1ae8a244b"
// var productKey = "8914442f7766b0926658c9cb1ef2746d"

const options = {
  keepalive: 60,
  clientId: clientId,
  protocolId: 'MQTT',
  protocolVersion: 3,
  clean: true,
  reconnectPeriod: 1000,
  connectTimeout: 30 * 1000,
  username: 'D556f0845e04214ae3781d',
  // username:'D711143b78327ec08de9e9',
  password: '12345678',
}

console.log('Connecting mqtt client')
 
const client = mqtt.connect(host, options)

client.on('connect', () => {
  console.log('Client connected:' + clientId)
  // Subscribe
  // client.subscribe('$rlwio/devices/D711143b78327ec08de9e9/shadow/update/accepted', { qos: 0 })
  client.subscribe('$rlwio/devices/D556f0845e04214ae3781d/shadow/update/accepted', { qos: 0 })
 })

client.on('error', (err) => {
  console.log('Connection error: ', err)
  client.end()
}) 

client.on('reconnect', () => {
  console.log('Reconnecting...')
})

client.on('message', (topic, message, packet) => {
 
  var payload
  try{
    payload = JSON.parse(message.toString()).state.reported.payload
    const messagejson = ProtoBuf.ProtoBuf(payload,productKey)
    client.publish(`$rlwio/devices/D556f0845e04214ae3781d/shadow/update`, messagejson)
  }
  catch{
    
  }

})
