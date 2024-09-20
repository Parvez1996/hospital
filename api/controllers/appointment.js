const appConst = require("../constants");
const { db } = require("../../db");
const mail = require("../commonServices/mailer");

// For adding data
const addAppointment = async (req, res) => {
  try {
    const collectionName = req.params.type;
    const collection = db.collection(collectionName);
    const resp = await collection.insertOne(req.body);
    mail.appointmentMail(req.body);
    res.status(201).json({
      status: appConst.status.success,
      response: req.body,
      message: null,
    });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({
      status: appConst.status.fail,
      response: null,
      message: err.message,
    });
  }
};

module.exports = { addAppointment };