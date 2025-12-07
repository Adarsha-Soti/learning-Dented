// import express from "express";
// import fs from "fs-extra";
// import cors from "cors";

// const app= express();
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));

// const PORT = 4000; 
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// app.get("/",(req,res)=>{
//     return res.send("Api endpoint");
// });
// app.get("/v1/users/details",(req,res)=>{
//   try{let data = JSON.parse(fs.readFileSync("..datas/userdetails.json"));
//   return res.send({
//     status:"success",
//     message:"user data fetched",
//     users:data,
//   }); }
//   catch(err){
//     res.status(500).json(
//       {
//         status:"error",
//         message:"could not read user data"
//       }
//     )
//   }
  
// })

import express from "express";
import fs from "fs-extra";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get("/", (req, res) => {
  res.send("API endpoint");
});

app.get("/v1/users/details", async (req, res) => {
  try {
    const data = await fs.readJson("../datas/userdetails.json"); // correct path
    res.json({
      status: "success",
      message: "User data fetched",
      users: data,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Could not read user data",
    });
  }
});
