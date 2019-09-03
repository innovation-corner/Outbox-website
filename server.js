const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const passport = require("passport");

require("./config/passport");

/** Setting up environment variable */
const port = process.env.PORT || 5000;
const app = express();

/** building the frontend */
app.use(express.static(path.join(__dirname, "frontend", "build")))

/** set up middlewares */
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = require("./routes");

app.use("/api/v1/auth", router.authRouter);
app.use("/api/v1/user",passport.authenticate('jwt', { session: false }), router.userRouter);
app.use("/api/v1/booking",passport.authenticate('jwt', { session: false }), router.bookingrouter);
app.use("/api/v1/business",passport.authenticate('jwt', { session: false }), router.businessRouter);
app.use("/api/v1/location",passport.authenticate('jwt', { session: false }), router.locationRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});

/** starting up the server */
app.listen(port, () => {
  console.log("Server running on port " + port);
});

module.exports = app;
