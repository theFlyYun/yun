const config = require('../../config/config.js');
const PBConfig = config.pb;
const protobuf = require('protobufjs');
const fs = require('fs');
const protoFilePath = '../../config/pbconfig/';
const path = require('path');

const root = protobuf.Root.fromJSON(require("../../config/pbconfig/protobufConfig.json"));
const payloaddecode = require('../utils/payloadDecode')
var logger=require('../../lib/logs/logger')
 
exports.ProtoBuf = PBtoJSON;

function Datahandle(productKey,output)
{
   var folder_name = PBConfig[productKey][1]
   folder_path = protoFilePath + folder_name+'.json'
   var jsonconfig = require(folder_path)
    for(key in jsonconfig){
        var obj = jsonconfig[key]
        if(obj.hasOwnProperty('divisor')&&output[key]!=null)
        {
          output[key] = output[key]/obj.divisor;
        }
    }
    return output
}

function PBtoJSON (payload, productKey) {
 
  if (PBConfig.hasOwnProperty(productKey))
  {
    let deviceType = PBConfig[productKey][0];
    let messageType = root.lookupType(deviceType);
    var buffer =  Buffer.from(payload, 'hex')
    var mess = messageType.decode(buffer);
    var output = messageType.toObject(mess,{
      enums:String,
      longs:String,
      bytes:String,
      defaults: false,  
      arrays: false,   
      objects: false,  
      oneofs: false,
    });

    output = Datahandle(productKey,output)
    output.payload_len = payload.length/2
  }
  else if(config.productkey2object.hasOwnProperty(productKey)){
   var output = payloaddecode.rawdata2JS(payload, productKey)
  }
  else{
    logger.error(`Payload has no productKey config`)
  }

  var obj = {
    state:{reported:output},
  };

  //转为json
  var messagejson = JSON.stringify(obj,"","\t");
  console.log(messagejson)
  
  return messagejson
}
 
