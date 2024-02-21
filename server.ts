import express from 'express'

 const app =express()

 app.listen(5001, ()=>{
    console.log("Listening to the port")
 })

 app.get('/', (req, res)=>{
    res.send("hello")
 })