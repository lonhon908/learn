const express = require("express");
const app = express();

const mockList = require("./mockList");

mockList.forEach(item => {
  app[item.type || "post"](item.url, function(req, res) {
    setTimeout(() => {
      res.status(200).json(item.result);
    }, item.delay || 0);
  });
});

app.listen(3000, function() {
  console.log(`http://localhost:3000`);
});
