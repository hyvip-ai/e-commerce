import express from 'express';
import cors from 'cors'
import defaultRouter from './routes/default.js';
import productRoutes from "./routes/product.js"
const app = express()
app.use(cors())
app.listen(5000,()=>{
    console.log(`Server running at Port http://localhost:5000`)
})
app.use("/api/v1",defaultRouter)
app.use("/api/v1",productRoutes)