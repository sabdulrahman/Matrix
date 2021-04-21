var express = require("express");
var fs = require("fs");
const path = require("path");					//installing required web frameworks to read data easily
var app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/views'));


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');		//setting proper access controls in the browser
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  next();
});

app.get("/", async (req, res) => {										//rooting path through index
  res.render("index",{});
});

app.listen(port, () =>
  console.log(`app listening at http://localhost:${port}`)				//listening on port number
);


