import express, { json } from "express"
import cors from "cors"
import "dotenv/config"
import { db } from "./config/db.js"
import { clerkwebhooks } from "./controllers/webhooks.js"
import companyRouter from "./routes/companyRoutes.js"
import connectCloudinary from "./config/cloudinary.js"

const app = express()

await connectCloudinary()

//Middlware
app.use(cors())
app.use(express.json())

//Route
app.get("/", (req,res)=>{
    res.send("Api working")
})
app.post("/webhooks", clerkwebhooks)
app.use("/api/company",companyRouter)

//Port
const PORT =  process.env.PORT || 5050

app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`)
})
