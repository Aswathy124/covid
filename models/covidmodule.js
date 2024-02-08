const mongoose=require("mongoose")
const studentschema=new mongoose.Schema(

{
    "patient":String,
    "phoneno":String,
    "dress":String,
   "sympotoms":String,
   "date":String
}

)
module.exports=mongoose.model("students",studentschema)