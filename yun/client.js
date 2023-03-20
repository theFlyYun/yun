var mqtt = require('mqtt');

const clientId = 'mqttjs_' + Math.random().toString(16).substr(2, 8);

const host = 'http://8.142.81.91:1883';
// const host = 'ws://localhost:1884';
var ProtoBufJs = require("protobufjs");
var root = ProtoBufJs.loadSync("./data_compression.proto");
var Message = root.lookupType("data_compression.SensorMessage");
var productKey = "a39ecc02a15affad254ff1a1ae8a244b";
var messageobj = Message.create();

const options = {
  keepalive: 60,
  clientId: clientId,
  protocolId: 'MQTT',
  protocolVersion: 3,
  clean: true,
  reconnectPeriod: 1000,
  connectTimeout: 30 * 1000,
  // username: 'D23a835cb80d758997bd08',
  username:'D556f0845e04214ae3781d',
  password: '12345678',
}

console.log('Connecting mqtt client')
const client = mqtt.connect(host, options)

client.on('connect', () => {
  console.log('Client connected:' + clientId)
  // Subscribe
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
  var messagestring = message.toString();
  
  var payload = JSON.parse(messagestring).state.reported.payload
  // console.log(payload)

  var buffer =  Buffer.from(payload, 'hex')
  // console.log(buffer)
  // console.log(Buffer.isBuffer(buffer))

  //decode
  var mess = Message.decode(buffer);
  console.log(mess)
 
  var output = Message.toObject(mess,{
      enums:String,
      longs:String,
      bytes:String,
    });

  var obj = {
    state:{reported:output},
  };
 
  //转为json
  var messagejson = JSON.stringify(obj,"","\t");
  console.log(messagejson)
  // client.publish(`$rlwio/devices/D556f0845e04214ae3781d/shadow/update`, messagejson)
  // console.log("finish")
})