const config = require('../config/config');
const configobject = config.productkey2object;
const payloadDecode = require('../lib/utils/payloadDecode');

const testJson = {};
const data4soil = '01010600003E2FD4010A01000101010501060107001A02000201020502060207010A03000301030503060307010A04000401040504060407010A0500050105050506050702021234';//编码后字节流
const productkey1='74139f8ab541edb7a12a13eaeebaeada'//soil did
const productkey2='?气象站did'
const data4weather='0101060000420DAC030D0101020203030404050506060704020101'

payloadDecode.rawdata2JS(data4soil,productkey1)
// payloadDecode.rawdata2JS(data4weather,productkey2)
// console.log(payloadDecode.getBit(3,1,2,6))
