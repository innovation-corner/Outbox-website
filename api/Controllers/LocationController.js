const { User } = require("../models/index");
const { Business } = require("../models/index");
const { Location } = require("../models/index");

module.exports = {
  async addLocation(req, res) {
    try {
      const { name, info, contactNumber, contactEmail, admin } = req.body;
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

      if (admin) {
        const userData = { locationId: location.id, role: "subAdmin" };
        await User.update(userData, { returning: true, where: { id: admin } });
      }

      return res.status(200).json({ message: "location added", location });
    } catch (err) {
      return res.status(400).json({ message: "An error occurred", err });
    }
  },

  async viewAllBusinessLocations(req, res) {
    try {
      const { businessId } = req.user;

      const criteria = { businessId };
      const { search } = req.query;

      if (search) {
        criteria.push({ name: { $like: search } });
      }

      const locations = await Location.findAll({ where: { criteria } });

      if (!locations) {
        return res.status(400).json({ message: "No saved locations yet" });
      }

      return res
        .status(200)
        .json({ message: "locations retrieved", locations });
    } catch (error) {
      return res.status(400).json({ message: "An error occurred", error });
    }
  },

  async editLocation(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      const reqLocation = await Location.findOne({ where: { id } });

      if (!reqLocation) {
        return res.status(400).json({ message: "invalid location" });
      }
      const location = await Location.update(data, {
        returning: true,
        where: { id }
      });

      return res.status(200).json({ message: "location updated", location });
    } catch (error) {
      return res.status(400).json({ message: "An error occurred", error });
    }
  },

  async viewLocation(req, res) {
    try {
      const { id } = req.params;
      const reqLocation = await Location.findOne({ where: { id } });

      if (!reqLocation) {
        return res.status(400).json({ message: "invalid location" });
      }

      return res
        .status(200)
        .json({ message: "location retrieved", reqLocation });
    } catch (error) {
      return res.status(400).json({ message: "An error occurred", error });
    }
  },

  async deleteLocation(req, res) {
    try {
      const { id } = req.params;
      const reqLocation = await Location.findOne({ where: { id } });

      if (!reqLocation) {
        return res.status(400).json({ message: "invalid location" });
      }
      await Location.destroy({
        returning: true,
        where: { id }
      });

      return res.status(200).json({ message: "location deleted" });
    } catch (error) {
      return res.status(400).json({ message: "An error occurred", error });
    }
  },

  async viewUsers(req, res) {
    try {
      const { id } = req.params;
      const criteria = { locationId: id };
      const { search } = req.query;

      if (search) {
        criteria.push({ name: { $like: search } });
      }

      const reqLocation = await Location.findOne({ where: { id } });

      if (!reqLocation) {
        return res.status(400).json({ message: "invalid location" });
      }

      const users = await User.findAll({ where: { criteria } });

      return res.status(200).json({ message: "users retrieved", users });
    } catch (error) {
      return res.status(400).json({ message: "An error occurred", error });
    }
  }
};
