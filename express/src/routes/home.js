const {Router} = require("express");

const router = Router();

router.all("/about", (req, res) => {

  const title = 'Mi pagina creada desde Express 2'

  res.render('index', { title });
});

router.get("/dashboard", (req, res) => {
  res.send("Dashboard Page");
});

module.exports = router