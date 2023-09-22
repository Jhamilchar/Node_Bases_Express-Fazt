const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request.url);

  if (request.url === "/") {
    response.write("Welcome to the server");
    return response.end();
  }

  if (request.url === "/about") {
    response.write("Acerca de");
    return response.end();
  } else if (request.url === "/profile") {
    response.write("Usuario");
    return response.end();
  }

  response.write("<h1>Not Found 404</h1>");
  response.write(`<a href='/'> Volver a la pagina </a>`);
  // response.write(`
  // <ul>
  //     <li>Manzana</li>
  //     <li>Papaya</li>
  //     <li>Mango</li>
  //     <li>Serpiente</li>
  // </ul>
  // <code>const http = require('http //FORMA DE JALARTE EL MODULO HTTP')</code>`);
  response.end();
});

server.listen(3000);

console.log("Servidor escuchando en el puerto 3000");
