const axios = require("axios");
const router = require("express").Router();

router.get("/api/books", (req, res) => {
  console.log("req.query.q " + req.query.q);
  let queryURL = "https://www.googleapis.com/books/v1/volumes?q=" + req.query.q;
  console.log(queryURL);
  axios
    .get(queryURL)
    .then(results => res.json(results))
    // .then(({ data: { results } }) => {console.log(results)
    //   res.json(results)})
    .catch(err => res.status(422).json(err.res));
});

module.exports = router;
