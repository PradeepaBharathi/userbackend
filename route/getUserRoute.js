import express from 'express'
import { deleteUser, editUser, getRegisteredUsers, getUserById } from '../controller/getUserController.js'

const route = express.Router()
route.get("/getUsers",getRegisteredUsers)
route.get("/userId/:id",getUserById)
route.put("/editUser/:id",editUser)
route.delete("/deleteUser/:id",deleteUser)
export default route