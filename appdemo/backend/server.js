import express from 'express'
import fs from 'fs'

const jokes = JSON.parse(
  fs.readFileSync('./jokes.json', 'utf-8')
)

const app = express()

app.get('/', (req, res) => {
    res.send("hey")
})

app.get('/api/jokes', (req, res) => {
    res.json(jokes)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
