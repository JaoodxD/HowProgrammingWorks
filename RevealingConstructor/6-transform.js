const fs = require('fs');
const { Transform } = require('stream');

const upperTransform = new Transform({
    transform(chunk, encoding, callback) {
        callback(null, chunk.toString().toUpperCase());
    }
});

const source = fs.createReadStream('./5-transform.js');

source.pipe(upperTransform).pipe(process.stdout);
