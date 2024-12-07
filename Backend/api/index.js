require('dotenv').config();
const mongoose = require('mongoose')
const userRouter = require('../router/userRouter')
const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser");
const app = express()
const PORT = 5000


app.use(cors({
    origin: ["https://machine-frondent.vercel.app"], 
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"], 
    credentials: true,
    
  }));

  mongoose.connect('mongodb+srv://shaminmuhammad116:FARRU12@cluster0.e0mhe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{  
    useNewUrlParser: true,
    useUnifiedTopology: true 
}).then(()=>console.log('Databse connected')).catch((err)=>console.log("err",err))


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.json('Welcome New app')
})


app.use('/api/users',userRouter)

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});