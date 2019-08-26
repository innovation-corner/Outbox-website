const { Business } = require("../models");
const { User } = require("../models");

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
      const criteria = { BusinessId: id };
      const { search } = req.query;

      if (search) {
        criteria.push({ name: { $like: search } });
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
  }
};
