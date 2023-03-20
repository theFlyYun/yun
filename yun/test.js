var protobuf = require("protobufjs");
var root = protobuf.loadSync("./websocket.proto");

var WebsocketMessage = root.lookupType("websocket.WebsocketMessage");
 
// Exemplary payload
var payload = { Topic: "weather",Body:new Buffer("hello the world") };
   
    // Verify the payload if necessary (i.e. when possibly incomplete or invalid)
    var errMsg = WebsocketMessage.verify(payload);
    if (errMsg)
        throw Error(errMsg);
 
    // Create a new message
    var message = WebsocketMessage.create(payload); // or use .fromObject if conversion is necessary
 
    // Encode a message to an Uint8Array (browser) or Buffer (node)
    var buffer = WebsocketMessage.encode(message).finish();
    // ... do something with buffer
 
    // Decode an Uint8Array (browser) or Buffer (node) to a message
    var message = WebsocketMessage.decode(buffer);
    // ... do something with message
     console.log("Topic:"+message.Topic);
     console.log("Body:"+message.Body)
    // If the application uses length-delimited buffers, there is also encodeDelimited and decodeDelimited.
  
 