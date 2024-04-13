const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const { login } = require('./auth/login.js')


//підключення й ініціалізація бази даних
mongoose.connect("mongodb://127.0.0.1:27017/projectdb")

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//що будемо туди відправляти
const testSchema = new mongoose.Schema({
    test_value: {
        type: String,
        required: true
    }
})

const testModel = mongoose.model('tests', testSchema)

app.post('/addtest', async (req, res) => {
    const test_value = req.body.test_value

    const test = new testModel({
        test_value: test_value
    })

    await test.save()
    res.send('200 Success')
})

app.post("/api/login", login);

//задання порту для серверу
app.listen(3001, () => {
    console.log("server started on port 3001")
})