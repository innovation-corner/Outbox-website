const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

/** Setting up environment variable */
const port = process.env.PORT || 5000;
const app = express();

/** set up middlewares */
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/** starting up the server */
app.listen(port, () => {
  console.log('Server running on port ' + port);
});

module.exports = app;