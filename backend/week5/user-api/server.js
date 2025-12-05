import express from "express";
import fs from "fs-extra";
import cors from "cors";

const app = express();

app.use(cors());

// request.body
app.use(express.json());
// form data
app.use(express.urlencoded({ extended: true }));

// baseurl
// http://localhost:3000
app.get("/", (req, res) => {
  return res.send("API ENDPOINT");
});

// read user
// GET  http://locahost:3000/api/v1/users
app.get("/api/v1/users", (request, response) => {
  // read user
  let data = JSON.parse(fs.readFileSync("./data/users.json"));
  return response.send({
    status: "success",
    message: "User data Fetched",
    users: data,
  });
});

// creating a user
// POST http://localhost:3000/api/v1/users
app.post("/api/v1/users", (request, response) => {
  // create users

  let requestData = request.body;
  console.log(requestData);

  // read users.json
  let usersList = JSON.parse(fs.readFileSync("./data/users.json"));
  // get users list

  // update id
  requestData.id = usersList.length + 1;
  // add new data

  usersList.push(requestData);
  // write users.json
  fs.writeFileSync("./data/users.json", JSON.stringify(usersList));

  return response.send({
    status: "succcess",
    message: "User Created",
  });
});

// update a user
app.patch("/api/v1/users/:userId", (request, response) => {
  // get user id
  let userId = request.params.userId;

  // get updated data
  let updateData = request.body;

  // read user json
  let userList = JSON.parse(fs.readFileSync("./data/users.json"));

  let user = userList.find((item) => item.id == userId);

  user.address = updateData.address;

  //update user.json
  fs.writeFileSync("./data/users.json", JSON.stringify(userList));

  return response.send({
    status: "success",
    message: "User updated",
  });
});

// delete user

app.listen(3000, (error) => {
  if (error) {
    console.log("SERVER FAILED TO START");
  } else {
    console.log("SERVER STARTED AT PORT: 3000");
  }
});
