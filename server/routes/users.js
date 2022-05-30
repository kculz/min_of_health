import  Express  from "express";

const router = Express.Router();


router.post('/users',(req,res)=>{
    res.send('Hello from usersRoute')
})

export default router