const config = require('../../config/config.js');
const PBConfig = config.pb;
const protobuf = require('protobufjs');
const fs = require('fs');
const protoFilePath = '../../config/pbconfig/';
const path = require('path');

const root = protobuf.Root.fromJSON(require("../../config/pbConfig/protobufConfig.json"));
const payloaddecode = require('../utils/payloadDecode')
 
exports.ProtoBuf = PBtoJSON;

function Datahandle(deviceType,output)
{
    folder_path = protoFilePath + deviceType+'.json'
    var jsonconfig = require(folder_path)
    for(key in jsonconfig){
        var obj = jsonconfig[key]
        if(obj.hasOwnProperty('divisor'))
        {
          output[key] = output[key]/10;
        }
    }
    return output
}

function PBtoJSON (payload, productKey) {
 
  if (PBConfig.hasOwnProperty(productKey))
  {
    let deviceType = PBConfig[productKey];
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
    output = Datahandle(deviceType,output)
  }

  else{
   var output = payloaddecode.rawdata2JS(payload, productKey)
  }
  
  output.payload_len = payload.length
  var obj = {
    state:{reported:output},
  };

  //转为json
  var messagejson = JSON.stringify(obj,"","\t");
  console.log(messagejson)
  
  return messagejson
}
 
