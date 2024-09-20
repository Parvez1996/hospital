const express = require("express");
const app = express();
const bodyparser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
let router = require("./api/router");
const prisma=require("./api/prismaConnection")
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());

//Main function 
async function init() {
  try {
    await prisma.$connect()
    app.use("/", router);
    app.listen(process.env.PORT, () => {
      console.log(`Server listening on port ${process.env.PORT}`);
    });
  } catch (err) {
    console.log(err.message);
  }
}
init();
