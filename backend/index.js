import data from './data/data.js';
import express from 'express';
import cors from 'cors'
const app = express()
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Server Is Running")
})
app.get("/api/products",(req,res)=>{
    res.send(data.products)
})
app.listen(5000,()=>{
    console.log(`Server running at Port http://localhost:5000`)
})