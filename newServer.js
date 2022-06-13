const express = require('express')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/',(req, res) => {
    const user = {
        name: "Mitch",
        id: "1320",
        age: "26",
        height: "3'1"
    }
    res.send(user)
})

app.get('/profile',(req, res) => {
    res.send("getting results")
})

app.post('/profile',(req, res) => {
    console.log(req.body)
    const user = {
        name: "Sally",
        desc: "Sells seashells"
    }
    res.send(user)
})

app.listen(3000);