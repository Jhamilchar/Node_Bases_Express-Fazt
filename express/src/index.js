const express = require("express");
const morgan = require("morgan");
const path = require('path')
require('ejs')

const app = express();

const HomeRoutes = require("./routes/home");
const UserRoutes = require("./routes/users");

//settings
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//midlewares
app.use(express.json())
app.use(morgan('dev'))

app.use(HomeRoutes)
app.use(UserRoutes)

//routes
app.use("/public", express.static(path.join(__dirname, 'public')));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(3000);
console.log(`Server on port ${3000}`);
