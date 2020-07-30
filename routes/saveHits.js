var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  console.log("query?", req.query);
  res.json(req.query);
});

module.exports = router;
