// 方法1：
var ProtoBufJs = require("protobufjs");
var root = ProtoBufJs.loadSync("./zzz.proto");
var AccountList = root.lookupType("zzz.AccountList");
var Account = root.lookupType("zzz.Account");
var accountListObj = AccountList.create();
for(var i = 0; i < 1; i++){
    var accountObj = Account.create();
    accountObj.accountName = "断天涯"+i;
    accountObj.pwd = "密码"+i;
    accountListObj.list.push(accountObj);
}
var buffer = AccountList.encode(accountListObj).finish();
console.log(buffer)
var message = AccountList.decode(buffer);
console.log(message)