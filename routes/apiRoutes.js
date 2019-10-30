const axios = require("axios");
const router = require("express").Router();

router.get("/books", (req, res) => {
  console.log(req.query);
  axios
    .get("https://www.googleapis.com/books/v1/volumes?q=" + req.query.q)
    .then(results => {
      console.log("results " + results.data);
      res.json(results.data)})
    .catch(err => res.status(422).json(err));
});

module.exports = router;
