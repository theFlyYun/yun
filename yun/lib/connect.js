const config = require('../config/config.js');
const ProtoBuf = require('../lib/protoBufferUnit/protoBufferUnit');
 

var mqtt = require('mqtt');
// const { PBtoJSON } = require('../lib/protoBufferUnit');

const clientId = 'mqttjs_' + Math.random().toString(16).substr(2, 8);

const host = 'http://8.142.81.91:1883';
// const host = 'ws://localhost:1884';
// var productKey = "a39ecc02a15affad254ff1a1ae8a244b"
// const data4soil = '0101060000420DAC010A01010202030304040505010A01010202030304040505010A01010202030304040505010A01010202030304040505010A0101020203030404050502020046';//编码后字节流
// const productkey1='74139f8ab541edb7a12a13eaeebaeada'//soil did
// const productkey2='?气象站did'
// const data4weather='0101060000420DAC030D0101020203030404050506060704020101'

var productKey = "74139f8ab541edb7a12a13eaeebaeada"

const options = {
  keepalive: 60,
  clientId: clientId,
  protocolId: 'MQTT',
  protocolVersion: 3,
  clean: true,
  reconnectPeriod: 1000,
  connectTimeout: 30 * 1000,
  // username: 'Ddb252a6195549e216f81c',
  username:'D556f0845e04214ae3781d',
  password: '12345678',
}

console.log('Connecting mqtt client')
 
const client = mqtt.connect(host, options)

client.on('connect', () => {
  console.log('Client connected:' + clientId)
  // Subscribe
  client.subscribe('$rlwio/devices/D556f0845e04214ae3781d/shadow/update/accepted', { qos: 0 })
  // client.subscribe('$rlwio/devices/Ddb252a6195549e216f81c/shadow/update/accepted', { qos: 0 })
 })

client.on('error', (err) => {
  console.log('Connection error: ', err)
  client.end()
}) 

client.on('reconnect', () => {
  console.log('Reconnecting...')
})

client.on('message', (topic, message, packet) => {
  //判断消息是否为PB


ProtoBuf.ProtoBuf(message,productKey)
  //不是PB

})
