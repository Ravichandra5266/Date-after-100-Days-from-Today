const express = require("express");

const app = express();

const add = require("date-fns/addDays");

app.get("/", (request, response) => {
  const addResult = add(new Date(2022, 8, 20), 100);

  response.send(
    `${addResult.getDate()}/${
      addResult.getMonth() + 1
    }/${addResult.getFullYear()}`
  );
});

module.exports = app;

//app.listen(3001);
