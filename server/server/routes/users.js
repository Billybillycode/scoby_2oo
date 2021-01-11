const express = require("express");
const router = express.Router();
const user = require("../models/User");

// http://localhost:4000/api/users
router.get("/", (req, res, next) => {
  // Get all the users
  user.find()
    .then((userDocuments) => {
      res.status(200).json(userDocuments);
    })
    .catch((error) => {
      next(error);
    });
});

// http://localhost:4000/api/users/{some-id}
router.get("/:id", (req, res, next) => {
  //Get one specific user
  user.findById(req.params.id)
    .then((userDocument) => {
      res.status(200).json(userDocument);
    })
    .catch((error) => {
      next(error);
    });
});

// http://localhost:4000/api/users/{some-id}
router.patch("/:id", (req, res, next) => {
  // Update a specific user
  user.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((userDocument) => {
      res.status(200).json(userDocument);
      // There's a trap !
    })
    .catch((error) => {
      next(error);
    });
});

// http://localhost:4000/api/users
router.post("/", (req, res, next) => {
  // Create a user
  user.create(req.body)
    .then((userDocument) => {
      res.status(201).json(userDocument);
    })
    .catch((error) => {
      next(error);
    });
});

// http://localhost:4000/api/users/{some-id}
router.delete("/:id", (req, res, next) => {
  // Deletes a user
  user.findByIdAndRemove(req.params.id)
    .then((userDocument) => {
      // res.sendStatus(204)
      res.status(204).json({
        message: "Successfuly deleted !",
      });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
