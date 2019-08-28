const userRouter = require("./UserRoutes");
const authRouter = require("./AuthRouter");
const locationRouter = require("./LocationRouter");
const bookingRouter = require("./BookingRouter");
const businessRouter = require("./BusinessRouter");
const roomRouter = require("./RoomRouter");

module.exports = {
  userRouter,
  locationRouter,
  // deskRouter,
  bookingRouter,
  roomRouter,
  businessRouter,
  authRouter
};
