require("dotenv").config()
const express = require("express");
const connectToDB = require("./config/db");
const app = express();

const PORT = process.env.PUBLIC_PORT || 5050;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server listenting at port ${PORT}`);
});

connectToDB().then((res) => {
  app.listen(PORT, () => {
    console.log(`Server listenting at port ${PORT}`);
  });
});
