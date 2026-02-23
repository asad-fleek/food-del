import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/food-route.js"


// app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

// db connnection
connectDB();

// api endpoints
app.use("/api/food",foodRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`);
    
})
//mongodb+srv://asadmahmood_db_user:gXrGZgUp85fN2m91@cluster0.ogxpoq0.mongodb.net/?