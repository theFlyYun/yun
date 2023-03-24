const config = require('../config/config.js');
const ProtoBuf = require('./protoBufferUnit/protoBufferUnit');
const _=require('./utils/getlist');

var mqtt = require('mqtt');
// const { PBtoJSON } = require('../lib/protoBufferUnit');
const clientId = 'mqttjs_' + Math.random().toString(16).substr(2, 8);
var did2product_key;

console.log('Connecting mqtt client')
 
const client = mqtt.connect(config.connect.host, config.connect.options)

client.on('connect', () => {
  console.log('Client connected:' + clientId)
  _.getlist().then(did2PK=>{
    did2product_key=did2PK
    for(key in did2PK){
      client.subscribe(`$rlwio/devices/${key}/shadow/update/accepted`, { qos: 0 })
    }

  })
})

client.on('error', (err) => {
  console.log('Connection error: ', err)
  client.end()
}) 

client.on('reconnect', () => {
  console.log('Reconnecting...')
})

client.on('message', (topic, message, packet) => {
//   console.log("message receive from",topic)
  var did=topic.slice(15,37)
  console.log("message receive from device:",did)
  var product_key=did2product_key[did]
  var payload
  try{
    payload = JSON.parse(message.toString()).state.reported.payload
    const messagejson = ProtoBuf.ProtoBuf(payload,product_key)

    client.publish(`$rlwio/devices/${did}/shadow/update`, messagejson)
  }
  catch{
 
  }
})
