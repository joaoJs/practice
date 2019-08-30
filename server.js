const express = require('express')
const app = express()
const port = 3000
const fetch = require('node-fetch')
var index = require('./routes/index')
var path = require('path')

app.use('/static', express.static(path.join(__dirname, 'public')))

app.use('/', index)

// app.get('/', (req, res) => res.send('Hello World!'))

// app.get('/login', (req, res) => {
//   console.log('here')
//   const id = '3217d123950c4f3093aca84c3ae7bc5e'
//   const redUri = 'http://localhost:3000'
//   const url = `https://accounts.spotify.com/authorize?client_id=${id}&response_type=code&redirect_uri=${redUri}&scope=user-read-private%20user-read-email&state=34fFs29kd09`
//   fetch(url).then(function(data) {
//     console.log(data)
//   })
// })
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
