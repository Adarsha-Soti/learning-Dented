import express, { json } from "express";
import fs from "fs-extra";
import cors from "cors";

const app= express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT = 4000; 
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// initialization check
app.get("/",(req,res)=>{
    return res.send("Api endpoint");
});

// user data fetched 
app.get("/v1/users/details",(req,res)=>{
  try{let data = JSON.parse(fs.readFileSync("../datas/userdetails.json"));
  return res.send({
    status:"success",
    message:"user data fetched",
    users:data,
  }); }
  catch(err){
    console.error("error reading json",err);
    res.status(500).json(
      {
        status:"error",
        message:"could not read user data"
      }
    )
  }
  
});

// create user 
app.post("/v1/user/details",(req,res)=>{

  let requestData=request.body;
  console.log(requestData);

  let userList =JSON.parse(fs.readFileSync("..datas/userDetails.json"));

  requestData.id=userList.lenght +1;

  userList.push(requestData);
  fs.writeFileSync("..datas/userDetails.json",JSON.stringify(userList));
  try{
    return res.send({
    status:"success",
    message:"user added successfully"
  })
  }
  catch(err){
    res.status(500).json(
      {
        status:"error",
        message:"issue adding error"
      }
  )    
  }

  
})

// import express from "express";
// import fs from "fs-extra";
// import cors from "cors";

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// const PORT = 4000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// app.get("/", (req, res) => {
//   res.send("API endpoint");
// });

// app.get("/v1/users/details", async (req, res) => {
//   try {
//     const data = await fs.readJson("../datas/userdetails.json"); // correct path
//     res.json({
//       status: "success",
//       message: "User data fetched",
//       users: data,
//     });
//   } catch (err) {
//     res.status(500).json({
//       status: "error",
//       message: "Could not read user data",
//     });
//   }
// });
