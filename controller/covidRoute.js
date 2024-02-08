const express=require("express")
const covidmodule=require("../models/covidmodule")
const router=express.Router()
router.get("/",(req,res)=>{
    res.send("hello")
})

router.post("/add",async(req,res)=>{
let data=req.body
let covid=new covidmodule(data)
let result=await covid.save()

res.json({status:"sucess"})
})

router.get("/viewall",async(req,res)=>{
    let data=await covidmodule.find()
    res.send(data)
})


    


module.exports=router