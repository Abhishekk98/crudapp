const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')


const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 8080


//Schema

const schemaData= mongoose.Schema({
    name : String,
    email : String,
    mobile : String,
},{timestamps : true})

const userModel = mongoose.model("user",schemaData)


// For Data Read

app.get("/",async(req,res)=>{
    const data = await userModel.find({})
    res.json({success : true , data : data})
})

//For Create Data

app.post("/create", async(req,res)=>{
    console.log (req.body)
    const data = new userModel(req.body)
    await data.save()
    res.send({success : true , message : "data save successfuly"})

})

//update data

/*
"http://localhost:8080/update"

*/


app.put("/update",async(req,res)=>{
    console.log(req.body)
    const { _id,...rest }= req.body
   
    console.log(rest)

  const data =  await userModel.updateOne({_id : _id},rest)
    res.send({seccess: true, message : "Data Updated Successfuly", data : data})

})

//For Delete Data
/*
"http://localhost:8080/delete/id"
*/

app.delete("/delete/:id",async(req,res)=>{
    const id = req.params.id
    console.log(id)
    const data = await userModel.deleteOne({_id:id})
    res.send({seccess: true, message : "Data Deleted Successfuly", data : data})

})


mongoose.connect("mongodb://127.0.0.1:27017/empdata")
.then(()=>{
    console.log("Connect to DataBase")
app.listen(PORT,()=>console.log("Server Is Running"))

})
.catch((err)=>console.log(err))