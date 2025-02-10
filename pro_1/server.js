const express=require('express')
const port=3001
const app=express();
const cors=require('cors')

app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
res.send('hello muddy')
})

app.post('/info',(req,res)=>{
  try{
  const {name,age,phoneNumber}=req.body
  if(!name || !phoneNumber)
  return res.status(400).json({message:"missing data"})
const len=phoneNumber.length
if(len<10 || len>10)
  return res.status(400).json({message:"wrong data"})
return res.status(200).json({message:"sucess"})
}
catch(e){
  console.log(e.message)
}
})


app.listen(port, ()=>{
  console.log(`server connected sucessfully at ${port}`)
})