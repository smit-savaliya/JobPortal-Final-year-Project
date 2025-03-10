import express from "express"
import { ChangeJobApplicationStatus, changeVisibility, companyData, getCompanyJobApplicants, getCompanyPostedJobs, loginCompany, postJob, registerCompany } from "../controllers/companyController.js"
import upload from "../config/multer.js"

const companyRouter = express.Router()

//Register a company
companyRouter.post("/register", upload.single("image"),registerCompany)

//company login
companyRouter.post("/login", loginCompany)

//get company data
companyRouter.get("/company", companyData)

//post a job
companyRouter.post("/post-job",postJob)

//get applicants data of company
companyRouter.get("/applicants", getCompanyJobApplicants)

//get company job list
companyRouter.get("/list-jobs",getCompanyPostedJobs)

//change apllication status
companyRouter.post("/change-status", ChangeJobApplicationStatus)

//change application visibility
companyRouter.post("/change-visibility", changeVisibility)

export default companyRouter