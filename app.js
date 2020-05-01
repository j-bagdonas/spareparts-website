const express       = require("express"),
      app           = express(),
      bodyParser    = require("body-parser");


app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));
app.use(express.static('files'));
app.use(bodyParser.urlencoded({extended: true}));

//landing
app.get("/", (req, res) => {
    res.render("landing");
});

//home page
app.get("/home", (req, res) => {
    res.render("index");
});

//songs index
app.get("/songs", (req, res) => {
    res.render("songs/index");
});

//songs individual(will re-do this to use a single ejs template).

app.get("/songs/thePuzzle", (req, res) => {
    res.render("songs/thePuzzle");
});
app.get("/songs/iKnewYoudCall", (req, res) => {
    res.render("songs/iKnewYoudCall");
});
app.get("/songs/throughTheGlass", (req, res) => {
    res.render("songs/throughTheGlass");
});

//gallery route
app.get("/gallery", (req, res) => {
    res.render("gallery");
});

//contact route
app.get("/contact", (req, res) => {
    res.render("contact");
});

//about us route
app.get("/about", (req, res) => {
    res.render("about");
});

//upcoming shows route
app.get("/upcomingShows", (req, res) => {
    res.render("upcomingShows")
});

//community 
app.get("/community", (req, res) => {
    res.render("community");
});

app.listen(3000, () => {
    console.log("Server is functioning");
});