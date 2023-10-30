const crypto = require('crypto');

const message = "this is a secret message";
console.log("Message:", message);

const hash = crypto.createHash('sha1').update(message).digest("hex");
console.log("SHA1 Hash:", hash);
