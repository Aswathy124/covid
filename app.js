const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const covidRoute=require("./controller/covidRoute")

const app=express()

app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://achu:Harifa123@cluster0.6jzim5t.mongodb.net/studentDb?retryWrites=true&w=majority",

{
    useNewUrlParser:true
}
    
)


app.use("/api/covid",covidRoute)


app.listen(3001,()=>{
    console.log("server running")
})