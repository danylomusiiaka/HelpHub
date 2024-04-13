const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  organisation_name: {
    type: String,
    required: true,
  },
  recipient_criteria: {
    type: [String], // "Впо", "Мають 2-х та більше дітей"
    required: true,
  },
  money_help: {
    type: [String], // "20 000 грн", "Разова допомога"
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const postModel = mongoose.model("Post", postSchema);

const addVolunteerPost = async (request, response) => {
  const {
    name,
    description,
    organisation_name,
    recipient_criteria,
    money_help,
    date,
  } = request.body;

  const post = new postModel({
    name,
    description,
    organisation_name,
    recipient_criteria,
    money_help,
    date,
  });

  try {
    await post.save();
    return response.status(201).json({ message: "Post created" });
  } catch (error) {
    console.error(`Error with creating post ${error.message}`);
    return response.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllVolunteerPosts = async (request, response) => {
  const posts = await postModel.find();
  return response.status(200).json(posts);
};

module.exports = {
  addVolunteerPost,
  getAllVolunteerPosts
};