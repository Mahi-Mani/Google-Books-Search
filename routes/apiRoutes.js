const axios = require("axios");
const router = require("express").Router();

router.get("/books", (req, res) => {
  console.log(req.query);
  axios
    .get("http://www.recipepuppy.com/api/", { params: req.query })
    .then(({ data: { results } }) => {
      console.log(results);
      res.json(results)})
    .catch(err => res.status(422).json(err));
});

module.exports = router;
