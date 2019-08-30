var express = require('express')
var router = express.Router()
var path = require('path')
const fetch = require('node-fetch')

// Home page route.
router.get('/', function(req, res) {
  res.sendFile('index.html', {
    root: path.join(__dirname, '../public')
  })
})

// About page route.
router.get('/about', function(req, res) {
  //res.send('About this wiki')
  const state = generateRandomString(16)
  const id = '3217d123950c4f3093aca84c3ae7bc5e'
  const redUri = 'localhost:3000/spotify'
  const url = `https://accounts.spotify.com/authorize?client_id=${id}&response_type=code&redirect_uri=${redUri}&scope=user-read-private%20user-read-email&state=34fFs29kd09`
  res.redirect(url)
  // fetch(url).then(function(res) {
  //   console.log(res)
  // })
})

router.get('/spotify', function(req, res) {
  res.send('Called back')
})

module.exports = router
