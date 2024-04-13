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
    phone_number: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
})

const authModel = mongoose.model('users', authSchema)
const authModel2 = mongoose.model('organisations', authSchema)


async function saveUserData(req, res, Model) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    console.log(req.body);

    const auth = new Model({
        name: req.body.name,
        password: hashedPassword,
        email: req.body.email,
        phone_number: req.body.phone_number,
        status: req.body.status
    });

    await auth.save();
    res.send('200 Success');
}

app.post('/adduser', async (req, res) => {
    await saveUserData(req, res, authModel);
});

app.post('/addorganisation', async (req, res) => {
    await saveUserData(req, res, authModel2);
});


app.post("/login", login);
app.put("/admin/verify-volunteer", verifyVolunteer);

//задання порту для серверу
app.listen(3001, () => {
    console.log("server started on port 3001")
})

exports.authModel = authModel