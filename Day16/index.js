import express from "express"
const app =express()

app.get('/',(req,res)=>{
    res.send("hellow boys")
})

app.get('/je',(req,res)=>{
    res.send("hellow boys het   ")
})


app.get('/user/:id',(req,res)=>{
    res.send( req.params.id)
})

app.listen(3000,()=>{
    console.log("the server run on 300")
})