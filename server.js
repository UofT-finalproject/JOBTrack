const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

//Updates for Passport
const logger = require("morgan");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

const passport = require("./Auth");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
require("dotenv").config();

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/jobtrack", { useNewUrlParser: true, useUnifiedTopology: true });

app.use(passport.initialize());
app.use(passport.session());
app.use(
  session({
    resave: false,
    saveUninitialized: false, 
    secret: process.env.mongoDB_secret,
    store: new MongoStore({ 
      mongooseConnection: mongoose.connection,
    }),
  })
);
app.use(logger("dev"));
//---End of Passport

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(cors());

//Passport Routes
const Authentication = require("./routes/Auth");
const User = require("./routes/User");
app.use("/auth", Authentication);
app.use("/user", User);

// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
