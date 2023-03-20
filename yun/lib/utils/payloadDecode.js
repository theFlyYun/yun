const config = require('../../config/config.js');
const productkey2object = config.productkey2object;

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

    var bufferData=Buffer.from(data, 'hex')
    var deviceInfo=productkey2object[productkey].deviceInfo
    var sensorInfo=productkey2object[productkey].sensorInfo
    var deviceInfoObj={}
    var sensorInfoObj={}//返回对象，用于组JS

    //设备信息
    for(key in deviceInfo){
        var obj=deviceInfo[key]
        if(key=='battery'){
            sensorInfoObj[key]=getInfo(data,obj)
        }
        else{
            deviceInfoObj[key]=getInfo(data,obj)
        }
        // deviceInfoObj[key]=getInfo(data,obj)
        // break;
    }

    //上报信息
    for(var i=0;i<sensorInfo.length;i++){//遍历每层
        var attributeInfo=sensorInfo[i].value
        // var dataLength=getInfo(data,sensorInfo[i].dataLength)
        // var sensorType=getInfo(data,sensorInfo[i].sensorType)
        // console.log(errorCode,dataLength,sensorType)
        for(key in attributeInfo){//遍历属性
            var attributeObj=attributeInfo[key]
            sensorInfoObj[key]=getInfo(data,attributeObj)
        }
    }

    // console.log(deviceInfoObj)
    // console.log(sensorInfoObj)
    // console.log(getBit(70,0,16))


    return sensorInfoObj
}
