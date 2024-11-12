const express = require('express')

var app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use(function (req, res, next){
    var date = new Date()
    if(date.getDay() == 0 || date.getDay() == 6){
        res.send("web site closed")
    }
    next()
})

app.get('/', function (req, res) {
    res.render('index');
})
app.get('/services', function (req, res) {
    res.render('service');
})

app.get('/contact', function (req, res) {
    res.render('contact');
})

app.listen(3000)
