const express = require('express')
var bodyParser = require('body-parser')
const cors = require('cors');
const app = express()


app.use(cors({credentials : true}))

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({
    extended: false
}))

app.use(function (req, res, next) {
    res.setHeader('Content-Type', 'application/json')
    next();
  });

const bcrypt = require('bcrypt')

const users = [{
    "name": "name",
    "password": "$2b$10$vUbwVmmjf8AszqLmOAo49eDMZXtPelvqTJcq1cWAnyTPvvUNPuqBK"
}]

app.get('/users', (req, res) => {
    res.json(users)
})

app.post('/users', async (req, res) => {

    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = {
            name: req.body.name,
            password: hashedPassword
        }
        users.push(user)
        res.status(201).send();
    } catch {
        res.status(500).send()
    }
})

app.post('/users/login', async (req, res) => {

    console.log(req.body)
    const user = users.find(user => user.name == req.body.name)
    if (user == null) {
        return res.status(400).send('Cannot find user')
    }

    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            res.sendStatus(200)
        } else {
            res.send('Wrong Password')
        }
    } catch {
        res.status(500).send()
    }
})

app.listen(8080)