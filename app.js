const express = require('express')
const mongoose = require('mongoose')
const PORT = 5000

const app = express()

//middleware to parse json request
app.use(express.json())

//connect to mongoDB with proper error handling
mongoose.connect("mongodb://localhost:27017/latest_db",{

})
.then(()=>{
    console.log("connect to mongodb");
})
.catch((err)=>{
    console.error("mongodb connection erro:",err)
});

//define schema and model for students
const UserSchema = new mongoose.Schema({
    name : String,
    age : Number
});

const UserModel = mongoose.model("student",UserSchema);

// Root route to get all inventory
app.get("/" , (req,res)=>{
    UserModel.find({})
    .then((students) => {
        res.json(students);
    })
    .catch((err)=>{
        console.log("error fetching error",err);
        res.status(500).json({error:"An error occurred while fetching inventory." })
    })
})




app.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`);
})



