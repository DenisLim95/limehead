var express = require("express");
var app = express();

app.set("view engine", "ejs");


app.get("/", function(req, res) {
   res.render("landing")
});

app.use(express.static(path.join(__dirname, '/public')));

app.listen(process.env.PORT, process.env.IP, function() {
   console.log("Website server has started...");
});
