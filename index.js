import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import userRoutes from './route/userRoute.js'
import dbConnection from './db.js'
import { isAuthenticated } from './auth/auth.js'
import getUsersRoutes from './route/getUserRoute.js'
dotenv.config()
dbConnection()
const app = express()
const PORT = process.env.PORT
app.use(express.json())
app.use(cors())


app.use("/user",userRoutes)
app.use("/usersList",isAuthenticated,getUsersRoutes)


app.get("/",(req,res)=>{
    res.status(200).send({message:"API WORKING"})
})

app.listen(PORT,()=>{
    console.log(`App is listening to PORT ${PORT}`)
})