const fs = require('fs');
const { Transform } = require('stream');

class UpperTransform extends Transform {
    _transform(chunk, encoding, callback) {
        callback(null, chunk.toString().toUpperCase());
    }
}

const upperTransform = new UpperTransform();

const source = fs.createReadStream('./5-transform.js');

source.pipe(upperTransform).pipe(process.stdout);
