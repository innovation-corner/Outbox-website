const { Business } = require("../models");
const { Location } = require("../models");
const { User } = require("../models");
const { Op } = require("sequelize");

module.exports = {
  async edit(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;

      const reqBusiness = await Business.findOne({ where: { id } });

      if (!reqBusiness) {
        return res.status(400).json({ message: "invalid selection" });
      }

      const updatedBusiness = await Business.update(data, { where: { id } });

      return res
        .status(200)
        .json({ message: "updated business", updatedBusiness });
    } catch (error) {
      return res.status(400).json({ message: "An error occurred" });
    }
  },

  async listUsers(req, res) {
    try {
      const { id } = req.params;
      const criteria = { businessId: id };
      const { search } = req.query;

      if (search) {
        criteria.push({ name: { [Op.like]: search } });
      }

      const reqBusiness = await Business.findOne({ where: { id } });

      if (!reqBusiness) {
        return res.status(400).json({ message: "invalid selection" });
      }

      const users = await User.findAll({ where: { criteria } });

      return res.status(200).json({ message: "users retrieved", users });
    } catch (error) {
      return res.status(400).json({ message: "An error occurred" });
    }
  },

  async viewAllBusinessLocations(req, res) {
    try {
      const { id } = req.params;

      const criteria = { businessId: id };
      const { search } = req.query;

      if (search) {
        criteria.push({ name: { [Op.like]: search } });
      }

      console.log('criteria', criteria)
      const locations = await Location.findAll({ where: criteria });
      console.log('criteria1', criteria)
      if (!locations) {
        return res.status(400).json({ message: "No saved locations yet" });
      }

      return res
        .status(200)
        .json({ message: "locations retrieved", locations });
    } catch (error) {
      return res.status(400).json({ message: "An error occurred", error });
    }
  }
};
