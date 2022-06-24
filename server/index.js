import  Express  from "express";
import cors from "cors"
import bodyParser from "body-parser";

import { db } from "./config/db.config.js";


const app = Express()

app.use(Express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))

//Auth users login
app.post('/login',(req,res)=>{
    let {username,password} = req.body
    let sql_cmd = "SELECT * FROM users WHERE username=? AND password=?"
    db.query(sql_cmd,[username,password],(error,result)=>{
        if(error){
            res.send(error)
        }
        if(result){
            res.send(result)
        }else{
            res.send(`Invalid Username | Password`)
        }
    })

})

//Get all assets
app.post('/assets',(req,res)=>{
    let sql_cmd = "SELECT * FROM assets"
    db.query(sql_cmd,(error,result)=>{
        if(error){
            res.send(error)
        }
        if(result){
            res.send(result)
        }
    })
})

//Get assets by id
app.post('/assets/:id',(req,res)=>{
    const {id} = req.params
    let sql_cmd = "SELECT * FROM assets WHERE id=?"
    db.query(sql_cmd,[id],(error,result)=>{
        if(error){
            res.send(error)
        }
        if(result){
            res.send(result)
        }
    })
})

// Add new asset
app.post('/assets/add',(req,res)=>{
    const assetDesc = req.body.assetDesc
    const assetSn = req.body.assetSn
    const assetGf = req.body.assetGf
    const custodianName = req.body.custodianName
    const department = req.body.department
    const assetCondition = req.body.assetCondition
    const assetStatus = req.body.assetStatus
    const dateIssued = req.body.dateIssued
    const dateOfLastService = req.body.dateOfLastService
    const purchaseValue = req.body.purchaseValue
    const request = req.body.request
    const requestStatus = req.body.requestStatus

   

  
    db.query("INSERT INTO assets (asset_desc,asset_sn,asset_gf,custodian_name,department,asset_condition,asset_status,date_issued,date_of_last_service,purchase_value,requests,requests_status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",[assetDesc,assetSn,assetGf,custodianName,department,assetCondition,assetStatus,dateIssued,dateOfLastService,purchaseValue,request,requestStatus],(error,result)=>{
        if(error){
            res.send(error)
        }
        if(result){
            res.send(`Inserted! ${result}`)
        }
    })
})

//Delete asset by id

app.delete('/assets/delete/:id',(req,res)=>{

    let sql_cmd = `DELETE FROM assets WHERE id='${req.params.id}'`
    db.query(sql_cmd,(error,result)=>{
        if(error){
            res.send(error)
        }
        if(result){
            res.send(result)
            console.log('deleted')
        }
    })
})

//Edit asset by id

app.patch('/assets/edit',(req,res)=>{
    const {id} = req.params
    const assetDesc = req.body.assetDesc
    const assetSn = req.body.assetSn
    const assetGf = req.body.assetGf
    const custodianName = req.body.custodianName
    const department = req.body.department
    const assetCondition = req.body.assetCondition
    const assetStatus = req.body.assetStatus
    const dateIssued = req.body.dateIssued
    const dateOfLastService = req.body.dateOfLastService
    const purchaseValue = req.body.purchaseValue
    const request = req.body.request
    const requestStatus = req.body.requestStatus
    let sql_cmd = "UPDATE assets SET asset_desc=?,asset_sn=?, asset_gf=?,custodian_name=?,department=?,asset_condtion=?,asset_status=?,date_issued=?,date_of_last_service=?,purchase_value=?,requests=?,requests_status=? WHERE id=? "
    db.query(sql_cmd,[assetDesc,assetSn,assetGf,custodianName,department,assetCondition,assetStatus,dateIssued,dateOfLastService,purchaseValue,request,requestStatus,id],(error,result)=>{
        if(error){
            res.send(error)
        }
        if(result){
            res.send(result)
        }
    })
})

app.listen(process.env.PORT || 5000,()=>{
    console.log(`Port runing`)
})