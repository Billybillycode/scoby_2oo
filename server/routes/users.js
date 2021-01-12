var express = require('express');
var router = express.Router();
const User = require("../models/User");
/* GET users listing. */

// http://localhost:4000/api/users
router.get("/", (req, res, next) => {
  // Get all the users
  User.find()
    .then((userDocuments) => {
      res.status(200).json(userDocuments);
    })
    .catch((error) => {
      next(error);
    });
});


// http://localhost:4000/api/users/{some-id}
router.patch("/:id", (req, res, next) => {
  // Update a specific user
  User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((userDocument) => {
      res.status(200).json(userDocument);
      // There's a trap !
    })
    .catch((error) => {
      next(error);
    });
});



module.exports = router;
