const passport = require("passport");
const bcrypt = require("bcryptjs");
const { User } = require("../models/index");
const { Business } = require("../models/index");
const { Attendee } = require("../models/index");
const JwtService = require("../modules/auth.module");
const Email = require("../Emails");
const { Op } = require("sequelize");

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

      const password = await generateCode(7);

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

      const { name } = await Business.findOne({ where: { id: businessId } });

      const emailData = { email, password, name };

      await Email.notifyNewUser(emailData);

      return res.status(200).json({ message: "User added", user });
    } catch (err) {
      return res.status(400).json({ message: "An error occurred", err });
    }
  },

  async edit(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;

      const reqUser = await User.findOne({ where: { id } });
      if (!reqUser) {
        return res.status(400).json({ message: "invalid selection" });
      }

      if (data.password) {
        if (data.password.trim() === "") {
          return res.status(400).json({ message: "invalid password" });
        }
      }
      
      await User.update(data, {
        where: { id }
      });
      const updatedUser = await User.findOne({where:{id}})

      return res.status(200).json({ message: "user updated", updatedUser });
    } catch (error) {
      return res.status(400).json({ message: "An error occurred", error });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;

      const reqUser = await User.findOne({ where: { id } });
      if (!reqUser) {
        return res.status(400).json({ message: "invalid selection" });
      }
      await User.destroy({ where: { id } });

      return res.status(200).json({ message: "user deleted" });
    } catch (error) {
      return res.status(400).json({ message: "An error occurred", error });
    }
  },

  async userAvailability(req, res) {
    try {
      const { id } = req.params;
      const start = req.body.time;
      const end = moment(start)
        .add(duration, "m")
        .toDate();

      const query = {
        time: {
          [Op.notBetween]: [start, end]
        },
        endTime: {
          [Op.notBetween]: [start, end]
        },
        userId: id
      };
      const user = await Attendee.findOne({ where: { query } });
      if (!user) {
        return res.status(400).json({ message: "user is booked" });
      }

      return res.status(400).json({ message: "user is available" });
    } catch (error) {}
  }
};
