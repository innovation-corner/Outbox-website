const userRouter = require("./UserRoutes");
const authRouter = require("./AuthRouter");
const locationRouter = require("./LocationRouter");
const bookingrouter = require("./BookingRouter");
module.exports = {
  userRouter,
  locationRouter,
  // deskRouter,
  bookingrouter,
  // businessRouter,
  authRouter
};
