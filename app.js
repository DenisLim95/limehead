var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'))

app.get("/", function(req, res) {
   res.render("landing");
});

app.get("/music", function(req, res) {
   res.render("music");
});

app.get("/projects", function(req, res) {
   res.render("projects");
});

app.get("/profile", function(req, res) {
   res.render("profile");
});

app.get("/contact", function(req, res) {
   res.render("contact");
});

// app.get("sketch", function(req,res) {
	
// })



// Uncomment this when actually deploying
// app.listen(process.env.PORT, process.env.IP, function() {
//    console.log("Website server has started...");
// });

app.listen( process.env.PORT || 3000, process.env.IP, function() {
   console.log("Website server has started online or at port 3000...");
});