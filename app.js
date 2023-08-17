const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json({extended: true, limit: '1mb'}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// api endpoint
app.post('/autofill', (req, res) => {
    const body = req.body
    console.log(body)

    // resend json data
    res.status(200).json(body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})






