const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res) => {
  fs.readFile(__dirname + "/server/public/index.html", "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Ошибка чтения файла");
    } else {
      res.send(data);
    }
  });
});

module.exports = router;
