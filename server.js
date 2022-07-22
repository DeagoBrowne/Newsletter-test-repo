const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const PORT = 5000;

const emails = require("./emails.json");

app.get("/", (req, res) => {
  res.send("Howdy");
})

app.listen(PORT, function () {
  console.log(`Live on ${PORT}`)
});

app.get("/emails", (req, res) => {
  res.send(emails)
})

app.post("/emails", (req, res) => {
  let emailsList = req.body;
  let newEmail = req.body.email;
  emails.push({
    "email": newEmail
  });
  res.send(emailsList).status(200);
})