const config = require('../config/config.js');
const ProtoBuf = require('./protoBufferUnit/protoBufferUnit');
const _=require('./utils/getlist');
var logger=require('../lib/logs/logger')

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
      logger.info(`${key} has subscribed`)
    }

  })
})

client.on('error', (err) => {
  console.log('Connection error: ', err)
  logger.error(`${err}`)
  client.end()
}) 

client.on('reconnect', () => {
  console.log('Reconnecting...')
  logger.info(`reconnect`)
})

client.on('message', (topic, message, packet) => {
  console.log("message receive from",topic)
  var did=topic.slice(15,37)
 
  var product_key=did2product_key[did]
  var payload
  try{
    var JS_origin_message=JSON.parse(message.toString())

    if(JS_origin_message.state.reported.payload!=undefined){

      const base64  = JS_origin_message.state.reported.payload
      const buff = Buffer.from(base64, 'base64');
      payload = buff.toString('hex');

      const messagejson = ProtoBuf.ProtoBuf(payload,product_key)
  
      client.publish(`$rlwio/devices/${did}/shadow/update`, messagejson)
  
      logger.info(`Message decoding succeeded:${messagejson}`)

    }
    else{
      // logger.info(`Message which has no payload,dont need decode:${message.toString()}`)
    }
  }
  catch(err){
    logger.error(`Message parsing process error:${err}`)
  }
})
