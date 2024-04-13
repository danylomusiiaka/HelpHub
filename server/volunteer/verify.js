const volunteerDb = require("../index.js");

// isVerified: bool
// volunteerId: number

const verifyVolunteer = async (request, response) => {
  const { isVerified, volunteerId } = request.body;
  return response.status(200).json({ isVerified, volunteerId });
};

module.exports = {
  verifyVolunteer,
}
