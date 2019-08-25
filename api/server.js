const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");

require("./config/passport");
/** Setting up environment variable */
const port = process.env.PORT || 5000;
const app = express();

/** set up middlewares */
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = require("./routes");

app.use("/api/v1/auth", router.authRouter);
app.use("/api/v1/user",passport.authenticate('jwt', { session: false }), router.userRouter);
app.use("/api/v1/business",passport.authenticate('jwt', { session: false }), router.businessRouter);
app.use("/api/v1/location",passport.authenticate('jwt', { session: false }), router.locationRouter);
/** starting up the server */
app.listen(port, () => {
  console.log("Server running on port " + port);
});

module.exports = app;
