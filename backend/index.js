const express=require('express')
const cors=require('cors')
const bodyparser=require('body-parser')
const fileupload=require('express-fileupload')
const mycon=require('mysql')

const app=express()
app.use(cors())

app.use(bodyparser.json())
app.use(fileupload())
app.use(bodyparser.urlencoded({extended:false}))
app.use(express.static('public'));

const c=mycon.createConnection({
      host:"localhost",
      port:3306,
      user:"root",
      password:"Gowtham@12345",
      database:"sqlpratice"

})
c.connect(function(error){
    if(error){
        console.log(error)
    }
    else{
        console.log('database connected')
    }
})
app.post('/insert',(req,res)=>{
      let{name,email,mobile,password,city,pincode,referral}=req.body;
    let sql='insert into login(name,email,mobile,password,city,pincode,referral)values(?,?,?,?,?,?,?)'
    c.query(sql,[name,email,mobile,password,city,pincode,referral],(error,result)=>{
          if(error){
            res.send(error)
          }
          else{
             res.send(result)
          }
    })
})
app.post('/getdata',(req,res)=>{
    let { id,name,email,mobile,password,city,pincode,referral}=req.body;
    let sql='select * from login'
    c.query(sql,[id,name,email,mobile,password,city,pincode,referral],(error,result)=>{
         if(error){
             res.send(error)
         }
         else{
             res.send(result)
         }
    })
})
app.get('/getdata',(req,res)=>{
    let { id,name,email,mobile,password,city,pincode,referral}=req.body;
    let sql='select * from login'
    c.query(sql,[id,name,email,mobile,password,city,pincode,referral],(error,result)=>{
         if(error){
             res.send(error)
         }
         else{
             res.send(result)
         }
    })
})
app.get('/getdetails/:id',(req,res)=>{
        let {id}=req.params;
        let sql='select * from login where id=?'
      c.query(sql,[id],(error,result)=>{
          if(error){
             res.send(error);
          }
          else{
             res.send(result);
          }
      })
})
app.post('/delete',(req,res)=>{
      let id=req.body.id;
      let sql='delete from login where id=?'
      
      c.query(sql,[id],(error,result)=>{
            if(error){
                 res.send(error)
            }
            else{
                 res.send(result)
            }
      })
})


app.listen(3001)