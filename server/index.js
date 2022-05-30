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
        if(result.length > 0){
            res.send(result)
        }else{
            res.send(`Invalid Username | Password`)
        }
    })

})

//Get all assets
app.get('/assets',(req,res)=>{
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

//Get assets by Department
app.post('/assest/:department',(req,res)=>{
    const {department} = req.params
    let sql_cmd = "SELECT * FROM assets WHERE department=?"
    db.query(sql_cmd,[department],(error,result)=>{
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
    const {asset_desc,asset_sn,asset_gf,custodian_name,department,asset_condition,asset_status,date_issued,date_of_last_service,purchase_value,requests,requests_status} = req.body
    let sql_cmd = "INSERT INTO assets (asset_desc,asset_sn,asset_gf,custodian_name,department,asset_condition,asset_status,date_issued,date_of_last_service,purchase_value,requests,requests_status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)"
    db.query(sql_cmd,[asset_desc,asset_sn,asset_gf,custodian_name,department,asset_condition,asset_status,date_issued,date_of_last_service,purchase_value,requests,requests_status],(error,result)=>{
        if(error){
            res.send(error)
        }
        if(result){
            res.send(`Inserted! ${result}`)
        }
    })
})






app.listen(process.env.PORT || 5000,()=>{
    console.log(`Port runing`)
})