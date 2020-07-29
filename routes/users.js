var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json([
    {
      id: 1,
      name: "the big man",
    },
    {
      id: 2,
      name: "new friend geromy",
    },
  ]);
});

module.exports = router;
