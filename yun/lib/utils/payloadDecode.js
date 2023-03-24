const config = require('../../config/config.js');
const productkey2object = config.productkey2object;
// const fetch = require("node-fetch") ;

module.exports ={
    rawdata2JS
}

//按位解析，返回值
function getBit(data,byteLength,startBit,bitLength){
    //data：字节流，高位不足补0
    var length=byteLength*8//总长
    return Math.floor((data%(1<<(length-startBit)))/(1<<(length-startBit-bitLength)));
}

function getInfo(data,obj){

    var sliceStart=obj.startByte
    var sliceEnd=Math.ceil(sliceStart+obj.bitLength/8)
    var byteLength=sliceEnd-sliceStart
    var dataSlice=data.slice(sliceStart*2,sliceEnd*2)
    var datavalue=parseInt(dataSlice,16)

    if(obj.startBit==0&&obj.bitLength%8==0){
        if(obj.hasOwnProperty('divisor')){
            return datavalue/obj.divisor
        }
        else{
            return datavalue
        }
    }
    else{
        if(obj.hasOwnProperty('divisor')){
            return getBit(datavalue,byteLength,obj.startBit,obj.bitLength)/obj.divisor
        }
        else{
            return getBit(datavalue,byteLength,obj.startBit,obj.bitLength)
        }
    }
    // console.log(dataSlice,datavalue,byteLength,obj.startBit,obj.bitLength)
}

function rawdata2JS(data,productkey){
    folder_path='../../config/streamconfig/'+config.productkey2object[productkey]
    // console.log(folder_path)

    var jsonconfig=require(folder_path)

    var payloadObj={}//返回对象，用于组JS

    //payload信息解码
    for(key in jsonconfig){
        var obj=jsonconfig[key]
        payloadObj[key]=getInfo(data,obj)
    }

    console.log(payloadObj)
    return payloadObj
}
