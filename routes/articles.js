const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("You're on the articles page");
});

module.exports = router;
