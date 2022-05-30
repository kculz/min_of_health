import mysql from 'mysql'

export const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'min'
})

db.getConnection((error,connect)=>{
    if(error){
        console.log(`connection failed`)
    }
    if(connect){
        console.log(`db connected`)
    }
})