const passport = require("passport");
const bcrypt = require("bcryptjs");
const { User } = require("../models/index");
const { Business } = require("../models/index");
const { Location } = require("../models/index");
const JwtService = require("../modules/auth.module");
const Email = require("../Emails");

module.exports = {
  async inviteUser(req, res) {
    try {
      const { email, firstname, location, role, gender } = req.body;
      const { businessId, id } = req.user;

      const checkEmail = await User.findOne({ where: { email } });
      const generateCode = (length, chars) => {
        if (!chars) {
          chars = "0123456789abcdefghijklmnopqrstuvwxyz";
        }
        let result = "";
        for (let i = length; i > 0; --i) {
          result += chars[Math.round(Math.random() * (chars.length - 1))];
        }
        return result;
      };

      const password = await generateCode(7)

      if (checkEmail) {
        return res.status(400).json({ message: "Email Exists" });
      }

      const data = {
        email,
        fullname: firstname,
        locationId: location,
        role,
        gender,
        businessId,
        password,
        isVerified: true
      };

      const user = await User.create(data);

      const {name} = await Business.findOne({where:{id:businessId}})

      const emailData = { email, password, name };

      await Email.notifyNewUser(emailData);

      return res.status(200).json({ message: "User added", user });
    } catch (err) {
      return res.status(400).json({ message: "An error occurred", err });
    }
  }
};
