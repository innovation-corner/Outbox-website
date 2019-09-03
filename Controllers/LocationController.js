const { User } = require("../models/index");
const { Room } = require("../models/index");
const { Location } = require("../models/index");
const { Op } = require("sequelize");

module.exports = {
  async addLocation(req, res) {
    try {
      const { name, info, contactNumber, contactEmail, admin } = req.body;
      const { businessId, id } = req.user;

      if (req.user.role !== "systemAdmin" && req.user.role !== "subAdmin") {
        return res.status(401).json({ message: "You do not have access" });
      }

      const data = {
        name,
        info,
        email: contactEmail,
        phoneNumber: contactNumber,
        businessId
      };
      const location = await Location.create(data);

      if (!req.user.locationId) {
        await User.update({ locationId: location.id }, { where: { id } });
      }

      if (admin) {
        const userData = { locationId: location.id, role: "subAdmin" };
        await User.update(userData, { where: { id: admin } });
      }

      return res.status(200).json({ message: "location added", location });
    } catch (err) {
      return res.status(400).json({ message: "An error occurred", err });
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

      await Location.update(data, {
        where: { id }
      });

      const location = await Location.findOne({ where: { id } });

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

      const rooms = await Room.findAll({ where: {locationId:id} });
      const data = {location:reqLocation, rooms}

      return res
        .status(200)
        .json({ message: "location retrieved", data });
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
        criteria.push({ name: { [Op.like]: search } });
      }

      const reqLocation = await Location.findOne({ where: { id } });

      if (!reqLocation) {
        return res.status(400).json({ message: "invalid location" });
      }

      const users = await User.findAll({ where: criteria });

      return res.status(200).json({ message: "users retrieved", users });
    } catch (error) {
      return res.status(400).json({ message: "An error occurred", error });
    }
  },

  async listRooms(req, res) {
    try {
      const { id } = req.params;
      const criteria = { locationId: id };
      const { search } = req.query;

      if (search) {
        criteria.push({ name: { [Op.like]: search } });
      }

      const rooms = await Room.findAll({ where: criteria });

      if (!rooms) {
        return res.status(400).json({ message: "no results found" });
      }
      return res.status(200).json({ message: "rooms retrieved", rooms });
    } catch (error) {
      return res.status(400).json({ message: "An error occured", error });
    }
  }
};
