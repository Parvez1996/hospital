

const appConst = require("../constants");
const { db } = require("../../db");
const mail = require("../commonServices/mailer");

// For adding data
const addOne = async (req, res) => {
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

const addMany = async (req, res) => {
  try {
    const collectionName = req.params.type;
    const collection = db.collection(collectionName);
    const resp = await collection.insertMany(req.body);
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

// Find single record
const findOne = async (req, res) => {
  try {
    const collectionName = req.params.type;
    const collection = db.collection(collectionName);
    const resp = await collection.findOne({ ref: req.params.id });
    res
      .status(201)
      .json({ status: appConst.status.success, response: resp, message: null });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({
      status: appConst.status.fail,
      response: null,
      message: err.message,
    });
  }
};

// Find multiple record with pagination
const findMany = async (req, res) => {
  try {
    const collectionName = req.params.type;
    const collection = db.collection(collectionName);
    let resp;
    const totalCount = await collection.countDocuments(req.body.where);
    if ((req.body.skip || req.body.skip === 0) && req.body.take) {
      resp = await collection
        .find(req.body.where)
        .sort({ updated_at: -1 })
        .skip(Number(req.body.skip))
        .limit(Number(req.body.take))
        .toArray();
    } else {
      resp = await collection
        .find(req.body.where)
        .sort({ updated_at: -1 })
        .toArray();
    }
    res.status(200).json({
      status: appConst.status.success,
      response: { records: resp, count: totalCount },
      message: null,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: appConst.status.fail,
      response: null,
      message: err.message,
    });
  }
};

// Update single record
const updateOne = async (req, res) => {
  try {
    const collectionName = req.params.type;
    const collection = db.collection(collectionName);
    const resp = await collection.updateOne(
      { ref: req.params.id },
      { $set: req.body }
    );
    res
      .status(201)
      .json({ status: appConst.status.success, response: resp, message: null });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({
      status: appConst.status.fail,
      response: null,
      message: err.message,
    });
  }
};

module.exports = { addOne, addMany, findOne, findMany, updateOne };


