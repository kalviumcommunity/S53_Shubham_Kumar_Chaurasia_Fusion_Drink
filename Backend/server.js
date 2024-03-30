const express = require('express');
const port = process.env.PUBLIC_PORT || 6009;

const app = express();
const {ConnectToDB} = require("./db")

app.use(express.json())

// app.use("/data",route)

ConnectToDB().then((mongoConnection)=>{
  app.get("/",(req,res)=>{
      res.json({message : mongoConnection ? "connected" : "disconnected"})
  })
})

app.listen(port,()=>{
  console.log(`Server is running on http://localhost:${port}`);
})

// const {ConnectToDB,stopDatabase,isConnected} = require('./db')
// const route=require('./routes');
// const cors=require("cors") 
// app.use(cors());