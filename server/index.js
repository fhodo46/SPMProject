require("dotenv").config();
const express = require("express");
const app = express();
const https = require("https");
const fs = require("fs");
const cors = require("cors");
const { connectToDb } = require("./database/db");
const logInRouter = require("../server/routers/loginRouter");
const signUpRouter = require("../server/routers/signUpRouter");
const authorization = require("../server/routers/authorization");
const allowedOrigins = ["https://localhost:3000", "postman://app"];

app.use(
  cors({
    origin: (origin, callback) => {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
  })
);

app.use("/logIn", logInRouter);
app.use("/permission", authorization);
app.use("/signUp", signUpRouter);

const options = {
  key: fs.readFileSync("./localhost.key"),
  cert: fs.readFileSync("./localhost.crt"),
};

const port = 5443;
const server = https.createServer(options, app);

connectToDb((err) => {
  if (err) {
    console.log("Sth went wrong with the server");
  } else {
    server.listen(port, () => {
      console.log(`Listening to HTTPS on port ${port}`);
    });
  }
});
