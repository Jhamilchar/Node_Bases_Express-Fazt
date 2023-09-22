const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome to the server");
    return res.end();
  }

//   task

//   for (let i = 0; i < 100000; i++) {
//     console.log(Math.random() * i);
//   }

  if (req.url === "/about") {
    return res.end("About page");
  }

  res.end("404 Not Found");
});

server.listen(3000);
console.log("Server on port 3000");
