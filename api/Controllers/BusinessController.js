const { Business } = require("../models");

module.exports = {
  async edit(req, res) {
    const { id } = req.params;
    const data = req.body;

    const reqBusiness = await Business.findOne({ where: { id } });
    if (!reqBusiness) {
      return res.status(400).json({ message: "invalid selection" });
    }

    const updatedBusiness = await Business.update(data, { where: { id } });
    return res.status(200).json({message:'updated business', updatedBusiness})
  }
};
