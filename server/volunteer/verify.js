const db = require("../index.js");

// isVerified: bool
// volunteerName: string

const verifyVolunteer = async (request, response) => {
  const { organisationsModel: organisations } = db;
  const { isVerified, volunteerName } = request.body;
  const organisation = await organisations.findOneAndUpdate(
    { name: volunteerName },
    { $set: { is_verified: isVerified } }
  );
  if (organisation === null) {
    return response.status(401).json({ message: "Organisation not found" });
  }
  return response.status(200).json({ message: "Verified organisation" });
};

module.exports = {
  verifyVolunteer,
};
