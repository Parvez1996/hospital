
const { MongoClient } = require("mongodb");

// Create a new MongoClient
const client = new MongoClient(process.env.DATABASE_URL, {
  compressors: ["zlib", "zstd"],
  retryWrites: true,
  writeConcern: "majority",
});

let db = client.db("hospital_management");

module.exports = { db };
