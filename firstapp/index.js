require("dotenv").config()
const express = require('express')
const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login', (req,res)=>{
    res.send('<h1> please login')
})
app.get('/yt', (req,res)=>{
    res.send('<h1> login <h2> Not allowed')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
