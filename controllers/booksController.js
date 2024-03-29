const db = require("../models");
console.log("Inside Books Controller");
// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Book
      .find()
      .sort({ date: -1 })
      .then(dbModel => {
        console.log("GET RESULTS QUERY");
        console.log(dbModel);
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Book
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("Inside books Controller");
    console.log(req.body);
    db.Book
      .create(req.body)
      .then(dbModel => {
        console.log("POST QUERY RESULTS");
        console.log(dbModel);
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
