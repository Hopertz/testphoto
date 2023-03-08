const fs = require('fs');

// Read the image file into a buffer
const buffer = fs.readFileSync('./bb.jpg');

console.log(buffer)

// Convert the buffer to a Uint8Array
const uint8Array = new Uint8Array(buffer);

// Or convert the buffer to a Buffer
const nodeBuffer = Buffer.from(buffer);

console.log(typeof nodeBuffer)
console.log(typeof buffer)
console.log(uint8Array[uint8Array.length-1])
