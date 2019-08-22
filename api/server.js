const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const cookieParser = require("cookie-parser");
// const session = require("express-session");
const jwt = require("./modules/auth.module");
const {User} = require('./models')
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

app.use("/auth", router.authRouter);
app.use("/user",passport.authenticate('jwt', { session: false }), router.userRouter);
app.use("/location",passport.authenticate('jwt', { session: false }), router.locationRouter);
/** starting up the server */
app.listen(port, () => {
  console.log("Server running on port " + port);
});

module.exports = app;
