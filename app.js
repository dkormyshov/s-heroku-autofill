const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json({extended: true, limit: '1mb'}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// api endpoint
app.post('/registration', (req, res) => {
    const { username, email } = req.body
    console.log(req.body)

    // resend json data
    res.status(200).json({ username, email })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})






