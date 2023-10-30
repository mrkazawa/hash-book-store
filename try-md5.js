const crypto = require('crypto');

let isVerified, recipientHash;

console.log("--------------------------------------------");
console.log("Begin valid hash scenario");

// sender wants to send a new message
const message = "this is a secret message";
console.log("Message:", message);

// sender creates a hash
const senderHash = crypto.createHash('md5').update(message).digest("hex");
console.log("MD5 Hash:", senderHash);

//----------------- Mock Tranmission Start -----------------//
console.log("Sender sends MESSAGE and HASH to recipient");
//----------------- Mock Tranmission End -----------------//

// after receiving the message, recipient makes a new hash
recipientHash = crypto.createHash("md5").update(message).digest("hex");
// then recipient compares if the newly generated hash
// is the same as the one that the sender sends previously
isVerified = (senderHash == recipientHash);
console.log("MD5 verification result is:", isVerified);

console.log("--------------------------------------------");
console.log("Begin invalid hash scenario");

//------------------ Mock Transmission Start ------------------//
console.log("Attacker intercept the communication");
console.log("Attacker obtain MESSAGE and HASH");
//------------------ Mock Transmission End ------------------//

// attacker creates a fake message
const attackerMessage = "this is a fake message";
console.log("Message:", attackerMessage);

//------------------ Mock Transmission Start ------------------//
console.log("Attacker sends FAKE MESSAGE and HASH to recipient");
//------------------ Mock Transmission End ------------------//

// after receiving the message, recipient makes a new hash
recipientHash = crypto.createHash("md5").update(attackerMessage).digest("hex");
// then recipient compares if the newly generated hash
// is the same as the one that the sender sends previously
isVerified = (senderHash == recipientHash);
console.log("MD5 verification result is:", isVerified);
