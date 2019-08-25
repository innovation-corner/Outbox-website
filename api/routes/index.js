const userRouter = require("./UserRoutes");
const authRouter = require("./AuthRouter");
const businessRouter = require("./BusinessRouter");
const locationRouter = require("./LocationRouter");
module.exports = {
  userRouter,
  locationRouter,
  // deskRouter,
  businessRouter,
  authRouter
};
