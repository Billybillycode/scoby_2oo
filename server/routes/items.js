const express = require("express");
const router = express.Router();
const item = require("../models/item");


// http://localhost:4000/api/items
router.get("/", (req, res, next) => {
  // Get all the items
  item.find()
    .then((itemDocuments) => {
      res.status(200).json(itemDocuments);
    })
    .catch((error) => {
      next(error);
    });
});

// http://localhost:4000/api/items/{some-id}
router.get("/:id", (req, res, next) => {
  //Get one specific item
  item.findById(req.params.id)
    .then((itemDocument) => {
      res.status(200).json(itemDocument);
    })
    .catch((error) => {
      next(error);
    });
});

// http://localhost:4000/api/items/{some-id}
router.patch("/:id", (req, res, next) => {
  // Update a specific item
  item.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((itemDocument) => {
      res.status(200).json(itemDocument);
      // There's a trap !
    })
    .catch((error) => {
      next(error);
    });
});

// http://localhost:4000/api/items
router.post("/", (req, res, next) => {
  // Create a item
  item.create(req.body)
    .then((itemDocument) => {
      res.status(201).json(itemDocument);
    })
    .catch((error) => {
      next(error);
    });
});

// http://localhost:4000/api/items/{some-id}
router.delete("/:id", (req, res, next) => {
  // Deletes a item
  item.findByIdAndRemove(req.params.id)
    .then((itemDocument) => {
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
