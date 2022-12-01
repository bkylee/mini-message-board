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

router.get('/new', function(req, res, next){
  res.render('form');
})

router.post('/new', function(res,req,next){
  messages.push({text: req.body.messages, user: req.body.name, added: new Date()});
  res.redirect('/');
});


module.exports = router;
