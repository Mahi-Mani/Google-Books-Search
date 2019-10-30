const axios = require("axios");
const router = require("express").Router();

console.log("inside apiroutes");
router.get("/books", (req, res) => {
  console.log("My query word");
  console.log(req.query);
  axios
    .get("https://www.googleapis.com/books/v1/volumes?q=" + req.query.q)
    .then(results => {
      console.log(results.data);
      res.json(results.data)})
    .catch(err => res.status(422).json(err));
});

module.exports = router;
