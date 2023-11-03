const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 3000
const hostname = '127.0.0.1'

// gunakan ejs
app.set('view engine', 'ejs')
app.use(expressLayouts)

app.get('/', function (req, res) {
  res.render('index', {
    layout: 'layouts/main-layout',
    title: 'home',
    kon: 'sensor'
  })
})

app.get('/about', function (req, res) {
  res.render('about', {
    layout: 'layouts/main-layout',
    title: 'about',
    kon: 'ini halaman about'
  })
})

app.use('/', (req, res) => {
    res.status(404)
    res.send('<h1> 404 <h1>')
  })

app.listen(port, () => {
      console.log(`Server running at http://${hostname}:${port}/`);
    });