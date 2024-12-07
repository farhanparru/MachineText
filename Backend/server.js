require('dotenv').config();
require('../Backend/Db/Database')
const userRouter = require('./router/userRouter')
const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser");
const app = express()
const PORT = 5000


app.use(cors({
    origin: "https://machine-text.vercel.app", 
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"], 
    credentials: true,
    
  }));


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.send('Welcome New app')
})


app.use('/api/users',userRouter)

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});