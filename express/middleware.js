const express = require("express");
const morgan = require('morgan')

const app = express();


app.use((req, res, next) => {
  console.log(`Route: ${req.url} Metodo: ${req.method}`);

  next();
});

app.get("/profile", (req, res) => {
  res.send("profile page");
});

app.all("/about", (req, res) => {
  res.send("about page");
});

app.use((req, res, next) => {
  if (req.query.login === 'fazt@web.com') {
    next()
  } else {
    res.send('No autorizado')
  }

  next();
});


app.get('/dashboard', (req, res) => {
  res.send('Dashboard Page')
})


app.listen(3000);
console.log(`Server on port ${3000}`)