var express = require('express');
var router = express.Router();
const User = require("../models/User");
/* GET users listing. */

router.get('/', function(req, res, next) {
  //get all users
  User.find()
  .then((userDocuments) => {
    res.status(200).json(userDocuments);
  })
  .catch((error) => {
    next(error);
  })
});

module.exports = router;
