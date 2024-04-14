const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { login } = require("./auth/login.js");
const { corsMiddleware } = require("./cors.js");
const bcrypt = require("bcrypt");

const { verifyVolunteer } = require("./volunteer/verify.js");
const {
  addVolunteerPost,
  getAllVolunteerPosts,
} = require("./volunteer/post.js");

// підключення й ініціалізація бази даних
mongoose.connect(
  "mongodb+srv://admin:3FTlj80Nx9mPMcL7@petprojects.9spehpo.mongodb.net/?retryWrites=true&w=majority&appName=PetProjects"
);

app.use(corsMiddleware);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// що будемо туди відправляти
const authSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const organisationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  is_verified: {
    type: Boolean,
    required: false,
  },
  file_base64: {
    type: String,
    required: true,
  },
});
const vacationsSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  is_verified: {
    type: Boolean,
    default: false,
  },
});

const authModel = mongoose.model("users", authSchema);
const organisationsModel = mongoose.model("organisations", organisationSchema);
const vacationsModel = mongoose.model("parsed_jobs", vacationsSchema);

async function saveUserData(request, response, userModel) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(request.body.password, saltRounds);

  const auth = new userModel({
    name: request.body.name,
    password: hashedPassword,
    email: request.body.email,
    phone_number: request.body.phone_number,
    status: request.body.status,
  });

  await auth.save();
  response.send("200 Success");
}

app.post("/adduser", async (request, response) => {
  await saveUserData(request, response, authModel);
});

app.post("/addorganisation", async (request, response) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(request.body.password, saltRounds);

  const organisation = new organisationsModel({
    name: request.body.name,
    password: hashedPassword,
    email: request.body.email,
    phone_number: request.body.phone_number,
    status: request.body.status,
    file_base64: request.body.file_base64,
    is_verified: false,
  });

  await organisation.save();

  return response
    .status(200)
    .json({ message: "Success adding new organisations" });
});

app.post("/login", login);

app.post("/volunteer", addVolunteerPost);
app.get("/volunteer", getAllVolunteerPosts);

app.put("/admin/verify-volunteer", verifyVolunteer);
app.put("/admin/verify-job", () => null);
app.get("/free-vacations", async (request, response) => {
  const vacations = await vacationsModel.find();
  console.log(vacations);
  response.status(200).json({ message: "Something happened"})
});
//задання порту для серверу
app.listen(3001, () => {
  console.log("server started on port 3001");
});

exports.authModel = authModel;
exports.organisationsModel = organisationsModel;
