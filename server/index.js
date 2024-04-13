const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { login } = require('./auth/login.js');
const { corsMiddleware } = require('./cors.js');
const bcrypt = require('bcrypt');

const { verifyVolunteer } = require("./volunteer/verify.js")

//підключення й ініціалізація бази даних
mongoose.connect("mongodb://127.0.0.1:27017/projectdb")

app.use(corsMiddleware);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//що будемо туди відправляти
const authSchema = new mongoose.Schema({
    surname: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
})

const authModel = mongoose.model('users', authSchema)

app.post('/adduser', async (req, res) => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    console.log(req.body)

    const auth = new authModel({
        surname: req.body.surname,
        name: req.body.name,
        password: hashedPassword,
        email: req.body.email,
        address: req.body.address,
    })


    await auth.save()
    res.send('200 Success')
})

app.post("/login", login);
app.put("/admin/verify-volunteer", verifyVolunteer);

//задання порту для серверу
app.listen(3001, () => {
    console.log("server started on port 3001")
})

exports.authModel = authModel