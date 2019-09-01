const jwt = require("jsonwebtoken");
const jwtSecret = process.env.jwtSecret || "secret";
const tokenExpirationInMinutes = 120;

module.exports = {
  async issueToken(payload, expirytime) {
    console.log(jwtSecret);
    var expiry = expirytime ? expirytime : tokenExpirationInMinutes;
    var token = jwt.sign(payload, process.env.TOKEN_SECRET || jwtSecret, {
      expiresIn: expiry * 60
    });
    console.log(token);
    return token;
  },

  async verifyToken(token, cb) {
    return jwt.verify(token, process.env.TOKEN_SECRET || jwtSecret, cb);
  }
};
