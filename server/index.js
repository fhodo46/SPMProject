require("dotenv").config();
const express = require("express");
const app = express();
const https = require("https");
const fs = require("fs");
const cors = require("cors");
const { connectToDb } = require("./database/db");
const logInRouter = require("../server/routers/loginRouter");
const signUpRouter = require("../server/routers/signUpRouter");
const commissionRouter = require("../server/routers/commissionRouter");
const debtRouter = require("../server/routers/debtRouter");
const inventoryRouter = require("../server/routers/inventoryRouter");
const meetingRouter = require("../server/routers/meetingRouter");
const redListRouter = require("../server/routers/redListRouter");
const referenceRouter = require("../server/routers/referenceRouter");
const reservedCallRouter = require("../server/routers/reservedCallRouter");
const salesRouter = require("../server/routers/salesRouter");
const scheduleRouter = require("../server/routers/scheduleRouter");
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
app.use("/debts", debtRouter);
app.use("/inventory", inventoryRouter);
app.use("/meetings", meetingRouter);
app.use("/redlist", redListRouter);
app.use("/references", referenceRouter);
app.use("/reservedCalls", reservedCallRouter);
app.use("/sales", salesRouter);
app.use("/schedules", scheduleRouter);
app.use("/commissions", commissionRouter);

const options = {
  key: fs.readFileSync("./localhost.key"),
  cert: fs.readFileSync("./localhost.crt"),
};

const port = 5443;
const server = https.createServer(options, app);

connectToDb(async (err) => {
  if (err) {
    console.log("Sth went wrong with the server");
  } else {
    server.listen(port, () => {
      console.log(`Listening to HTTPS on port ${port}`);
    });
  }
});
