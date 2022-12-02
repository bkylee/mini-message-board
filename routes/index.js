var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Yo dawg",
    user: "Franklin",
    added: new Date(),
  },
  {
    text: "Sup homie",
    user: "Lamar",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Tweeter", messages: messages });
});

router.get("/new", function(req, res, next){
  res.render("form", { title: "Create a post" });
});

router.post("/new", function(req,res,next){
  messages.push({text: req.body.message, user: req.body.messageUser, added: new Date()});
  res.redirect('/');
});

module.exports = router;
