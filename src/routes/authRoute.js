const route = require('express').Router();

route.get('/login', (req, res) => {
    res.send('login')
})

route.get('/singup', (req, res) => {
    res.send('singup')
})


module.exports = route;