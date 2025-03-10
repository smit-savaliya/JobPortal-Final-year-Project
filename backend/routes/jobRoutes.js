import express from "express"
import { getJobById, getJobs } from "../controllers/jobController.js"

const jobRouter = express.Router()

//route to get all job data
jobRouter.get("/" , getJobs)

//route to get single job by id
jobRouter.get("/:id",getJobById)


export default jobRouter
