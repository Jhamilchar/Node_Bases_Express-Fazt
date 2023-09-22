const http = require("http");
const { createReadStream, utimes } = require("fs");

const server = http.createServer((req, res) => {
    const fileStream = createReadStream('./data/bigFile.txt', {
        encoding: 'utf-8'
    })

    fileStream.on('data', (chunk) => {
        fileStream.pipe(res)
    })

    fileStream.on('error', error => {
        console.log(error);
    })

})

server.listen(3000)
 console.log('sever on port 3000');
