import express from "express";
import fs from "fs";

const app = express();

// static serve
app.use("/public", express.static("assets"));

app.get("/", (req, res) => {
  res.send("<h1>Title</h1> <p>BODY</p>");
});

app.get("/user", (req, res) => {
  let userName = "John Doe";

  let htmlString = fs.readFileSync("./assets/index.html", "utf-8");

  console.log(htmlString);
  htmlString = htmlString.replace("[user]", userName);

  res.send(htmlString);
});

app.listen(3000);
