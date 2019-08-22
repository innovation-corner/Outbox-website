const { User } = require("../models/index");
const { Business } = require("../models/index");
const { Location } = require("../models/index");

module.exports = {
  async addLocation(req, res) {
    try {
      const { name, info, contactNumber, contactEmail } = req.body;
      const { businessId } = req.user;

      if (req.user.role !== "systemAdmin" && req.user.role !== "subAdmin") {
        return res.status(400).json({ message: "You do not have access" });
      }
      const data = {
        name,
        info,
        email: contactEmail,
        phoneNumber: contactNumber,
        businessId
      };
      const location = await Location.create(data);

      return res.status(200).json({ message: "location added", location });
    } catch (err) {
      return res.status(400).json({ message: "An error occurred", err });
    }
  }
};
