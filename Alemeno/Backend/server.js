const express=require('express')
const app=express();
const PORT=5000;
app.listen(PORT,()=>console.log(`Server Running .... On Port Number is ${PORT}`))
const mongoose=require('mongoose')
const cors=require('cors')
const {MONGOOSE_KEY} =require('./keys')
app.use(express.json());
app.use(cors(
    {
    origin:"*"
}))

require('../Backend/model/usermodal')
app.use(require('./routers/auth'))
mongoose.connect(MONGOOSE_KEY)
mongoose.connection.on('connected',()=>{
    console.log("Database Connected Successfull")
})
mongoose.connection.on("error",()=>{
    console.log("Error Occured During DB Connection")
})