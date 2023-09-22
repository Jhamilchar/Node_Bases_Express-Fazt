const express = require('express')

const app = express();

app.all('/info', (req, res) => {
  res.send('server info')
})

app.get('/search', (req, res) => {
  if (req.query.q === 'javascript books') {
    res.send('lista de libros de javascript')
  } else {
    res.send('pagina normal')
  }
})

app.get('/hello/:username', (req, res) => {
  console.log(req.query.per);
  res.send(`Hello ${req.params.username}`);
})

app.get('/add/:x/:y', (req, res) => {

  const {x, y} = req.params

  // const result = parseInt(x) + parseInt(y)
  res.send(`Result : ${parseInt(x) + parseInt(y)}`)
})

app.get('/user/:username/photo', (req, res) => {
  console.log(req.params);
  if (req.params.username === "fazt") {
    return res.sendFile("./node.png", {
      root: __dirname
    });
  }
  res.send('El usuario no esta permitido')
})


app.listen(3000);
console.log(`Server on port ${3000}`);