
var ProtoBufJs = require("protobufjs");
var root = ProtoBufJs.loadSync("./payload.proto");
var Message = root.lookupType("payload.Message");
 
const messageobj = {
    temperature: 38.51.toFixed(2),
    humidity: 0.4.toFixed(2),
  };
console.log(messageobj)
var buffer = Message.encode(messageobj).finish();
console.log(buffer)

var message = Message.decode(buffer);
console.log(message)
 
 
var output = Message.toObject(message,{
    enums:String,
    longs:String,
    bytes:String,
    defaults: false,  
    arrays: false,   
    objects: false,  
    oneofs: false,
});

var obj = {
    state:{reported:output},
};
 
var messagejson = JSON.stringify(obj,"","\t");

console.log(messagejson)