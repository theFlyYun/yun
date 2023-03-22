const config = require('../../config/config.js');
const PBConfig = config.pb;
const protobuf = require('protobufjs');
const fs = require('fs');
const protoFilePath = '../config/pbconfig/';
const path = require('path');

// const root = protobuf.Root.fromJSON(require("../../config/pbConfig/protobufConfig.json"));
const payloaddecode = require('../utils/payloadDecode')

 
function readProtoFileList (pbPath, filesList) {

  let files = fs.readdirSync(pbPath);
  files.forEach(function (itm, index) {
    let stat = fs.statSync(pbPath + itm);
    if (stat.isDirectory()) {
      readProtoFileList(pbPath + itm + '/', filesList);
    } else {
      if (path.extname(itm) === '.proto') {
        filesList.push(pbPath + itm);
      }
    }
  });
};


function readConfigFile(productKey) {

  let protoFlieList = [];
  readProtoFileList(protoFilePath, protoFlieList)
  const root = protobuf.loadSync(protoFlieList);
  let deviceType = '';

  if (PBConfig.hasOwnProperty(productKey)) 
  {
    deviceType = PBConfig[productKey];
  }

  let messageType = root.lookupType(deviceType);
 
  return messageType
}
 
exports.ProtoBuf = PBtoJSON;

function PBtoJSON (payload, productKey) {

  if (PBConfig.hasOwnProperty(productKey))
  {
    var buffer =  Buffer.from(payload, 'hex')
    var messageType = readConfigFile(productKey)
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
    var i = 1;
    var j = 1;
    for(key in output)
    {
      if(key == "water_"+i || key == "PH")
      {
        output[key] = output[key]/10;
        i++;
      }
      else if(key == "temp_"+j)
      {
        if(output[key] > 32768)
        {
          output[key] = output[key] - 65536;
        }
        output[key] = output[key]/10;
        j++;
      }
    }
  }
  else{
   var output = payloaddecode.rawdata2JS(payload, productKey)
  }
  
  var obj = {
    state:{reported:output},
  };

  //转为json
  var messagejson = JSON.stringify(obj,"","\t");
  console.log(messagejson)
  
  return messagejson
}
 
