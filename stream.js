const { createReadStream } = require("fs");

const stream = createReadStream('./data/biasdgFile.txt', 'utf-8')

stream.on('data',(chunk) => {
    console.log(chunk);
})

stream.on('end', () => {
    console.log('Ya termine de leer el archivo');
})

stream.on('error', (e) => {
    console.log(e);
})