const express=require('express')
let mongodb = require('mongodb')

const app=express()

app.get("/",function(req,res){
  res.send("Hello")
})

let port = process.env.PORT
if (port == null || port == "") {
  port = 3000
}


let connectionString = 'mongodb+srv://todoappuser:todoappuser@cluster0.7fin5.mongodb.net/complex_app?retryWrites=true&w=majority'
mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
  console.log(err)
  db = client.db()
  app.listen(port)
})
