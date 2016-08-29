var express = require('express');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var cors = require('cors');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var expressJwt = require('express-jwt');
var jwt = require('jsonwebtoken');

mongoose.connect("mongodb://localhost");

var UserModel = require("./user.model")(mongoose);
var ListItemModel = require("./list.model")(mongoose);

var app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({
  extended: true}));
app.use(cors());
app.use(expressSession({
  secret: "g.o.a.t",
  resave: false,
  saveUninitialized: false
}));

//app.use('/api', expressJwt({secret: secret}));

app.use(function(req,res,next) {
  console.log(req.url);
  next();
});

/*app.post("/authenticate", function(req, res) {
// authenticate user
// set profile
// send the profile inside the token
var token = jwt.sign(profile, secret, { expiresInMintes: 60*5 });

res.json({ token: token});
});*/

/*app.get("/api/restricted", function (req, res) {
  res.json({
    name: "foo"
  });
});*/

app.post("/login", function(req,res) {
  UserModel.findOne({
    username: req.body.username,
    password: req.body.password
  }, function(err, data) {
      if(err){
        res.status(500);
        res.send("Error logging in");
        return;
      }
      if (!data) {
        res.send({
          status: "error"
        });  
      } else {
        req.session.userId = data._id;
        req.session.save();
        res.send({
          status: "success",
          userInfo: data
        });
      }
  });
});

app.post("/logout", function(req,res){
  req.session.destroy();
  res.send({status: "success"});
});

app.post("/signup", function(req, res) {
  UserModel.findOne({
    username: req.body.username
  }, function(err, data) {
    if(err) {
      res.status(500);
      res.send("Error checking username");
      return;
    }
    if(data) {
      res.send({
        status: "error",
        message: "Username already taken"
      });
    } else {
      var userInfo = {
        username: req.body.username,
        password: req.body.password
      };
      var newUser = new UserModel(userInfo);
      newUser.save(function(err, data)  {
        if(err) {
          res.status(500);
          res.send("Error creating user");
          return;
        }
        req.session.userId = data._id;
        req.session.save();
        res.send({
          status: "success",
          userInfo: userInfo
        });
      });
    }
  });
});

app.get('/all', function(req,res) {
  ListItemModel.find(
    {},
    function(err, data) {
      if (err) {
        res.status(500);
        res.send("Error getting all lists");
        return;
      }
      res.send(JSON.stringify(data));
    }
  );
});

app.post('/create', function(req, res) {
  console.log(req.session.userId);
  var list = {
    userId: req.session.userId,
    index: req.body.list.id,
    title: req.body.list.title || "",
    items: []
  };


  new ListItemModel(list).save(function(err, data) {
    if (err) {
      res.status(500);
      res.send("Error creating line item");
      return;
    }
    res.send(JSON.stringify(data));
  });
});

app.post('/saved', function(req,res) {
   if (err) {
      res.status(500);
      res.send("Error creating list item");
      return;
   }
   res.send(data);
});

app.get('/saved', function(req,res) {
   ListItemModel.find(
    {},
    function(err, data) {
      if (err) {
        res.status(500);
        res.send("Error getting saved lists");
        return;
      }
      res.send(JSON.stringify(data));
    }
  ); 
});

app.post('/update', function(req, res) {
  var id = req.body.id;
  ListItemModel.findOneAndUpdate(
    { _id : id},
      {$push: {items: req.body.item}},
    {new : true},
    function(err, data) {
      if (err) {
          res.status(500);
          res.send("Error creating list item");
          return;
      }
      res.send(data);
    }
  );
});

app.use(function(req, res, next) {
  res.status(404);
  res.send("no");
});

app.listen(3500, function(){
  console.log("yes: 3500");
});
