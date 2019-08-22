const { Business } = require("../models");
const { User } = require("../models");

module.exports = {
  async edit(req, res) {
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
  },

  async listUsers(req, res) {
    const { id } = req.params;

    const reqBusiness = await Business.findOne({ where: { id } });

    if (!reqBusiness) {
      return res.status(400).json({ message: "invalid selection" });
    }

    const users = await User.findAll({ where: { businessId: id } });

    return res.status(200).json({message:'users retrieved', users})
  }
};
